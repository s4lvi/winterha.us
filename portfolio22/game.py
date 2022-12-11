from re import X
import pygame
import time
import sys
import math

SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
PADDLE_Y = SCREEN_HEIGHT - 64
pygame.init()
pygame.display.set_caption('BREAKOUT!')
bounce_sound = pygame.mixer.Sound("portfolio22/tap.mp3")
pygame.mouse.set_cursor((8,8),(0,0),(0,0,0,0,0,0,0,0),(0,0,0,0,0,0,0,0))

def tap():
    pygame.mixer.Sound.play(bounce_sound)
    pygame.mixer.music.stop()

def getDirection(rect1, rect2):
    dx = rect2[0] - rect1[0]
    dy = rect2[1] - rect1[1]
    dist = math.sqrt(dx**2 + dy**2)
    return [dx/dist, dy/dist]

class Ball:
    def __init__(self, x, y, radius, color):
        self.x = x
        self.y = y
        self.dx = .5
        self.dy = .5
        self.speed = 300
        self.color = color
        self.radius = radius
        self.setRect()

    def setRect(self):
        self.rect = pygame.Rect(self.x - self.radius + 2, self.y - self.radius + 2, self.radius*2-2, self.radius*2- 2)

    def draw(self, screen):
        pygame.draw.circle(screen, self.color, (self.x,self.y), self.radius, width=2)
        #pygame.draw.rect(screen, (255,255,0), self.rect)
        
    def normalize(self):
        n = math.sqrt(self.dx**2 + self.dy**2)
        self.dx = self.dx / n
        self.dy = self.dy / n

    def update(self, tick, objects):
        for o in objects:
            if self.rect.colliderect(o.rect):
                if o.type == "PADDLE":
                    tap()
                    toX, toY = getDirection(self.rect.center, [o.rect.center[0], o.rect.center[1]+32])
                    self.dx = -toX
                    self.dy = -self.dy
                if o.type == "BLOCK" and o.active:
                    tap()
                    o.active = False
                    if o.rect.collidepoint(self.rect.midtop) or o.rect.collidepoint(self.rect.midbottom):
                        self.dy = -self.dy
                    else:
                        self.dx = -self.dx
                    break
        if self.x < 0:
            tap()
            self.dx = abs(self.dx)
        if self.x > 640:
            tap()
            self.dx = -abs(self.dx)
        if self.y < 0:
            tap()
            self.dy = abs(self.dy)
        if self.y > 480:
            tap()
            self.dy = -abs(self.dy)
        self.normalize()
        self.x += (self.dx * self.speed * tick) 
        self.y += (self.dy * self.speed * tick) 
        self.setRect()
        

class Paddle: 
    def __init__(self):
        self.x = 0
        self.y = PADDLE_Y
        self.active = True
        self.width = 128
        self.type = "PADDLE"
        self.setRect()

    def setRect(self):
        self.rect = pygame.Rect(self.x, self.y, self.width, 16)

    def grow(self):
        if self.width < 256:
            self.width = self.width + 32
    
    def shrink(self):
        if self.width > 64:
            self.width = self.width - 32

    def move(self, x, y):
        self.x = x
        self.y = y
        self.setRect()

    def update(self, tick):
        return

    def draw(self, screen):
        pygame.draw.rect(screen, (255,255,255), self.rect, border_radius=8, width=2)


class Block:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.active = True
        self.type = "BLOCK"
        self.setRect()

    def setRect(self):
        self.rect = pygame.Rect(self.x, self.y, 64, 32)

    def draw(self, screen):
        pygame.draw.rect(screen, (255,255,255), self.rect, border_radius=2, width=2)

    def update(self, tick):
        return 

def main():

    size = 640, 480
    screen = pygame.display.set_mode(size)
    clock = pygame.time.Clock()
    mx, my = (0,0)
    playing = True
    paddle = Paddle()
    renderObjs = [paddle]
    for i in range(5):
        renderObjs.append(Block(32*3,32*(3+i)))
        renderObjs.append(Block(32*5,32*(3+i)))
        renderObjs.append(Block(32*7,32*(3+i)))
        renderObjs.append(Block(32*9,32*(3+i)))
        renderObjs.append(Block(32*11,32*(3+i)))
        renderObjs.append(Block(32*13,32*(3+i)))
        renderObjs.append(Block(32*15,32*(3+i)))
    blocksLeft = len(renderObjs)
    balls = []
    balls.append(Ball(320, 240, 8, [255,255,255]))
    
    while playing and blocksLeft > 1:
        tick = clock.tick()/1000
        for event in pygame.event.get():
            if event.type == pygame.QUIT: sys.exit()
        mx, my = pygame.mouse.get_pos()
        screen.fill([0,0,0])
        paddle.move(mx, paddle.y)
        blocksLeft = 0
        for i in range(len(renderObjs)):
            if renderObjs[i].active:
                renderObjs[i].update(tick)
                renderObjs[i].draw(screen)
                blocksLeft += 1
        for i in range(len(balls)):
            balls[i].update(tick, renderObjs)
            balls[i].draw(screen)
        pygame.display.flip()

    font = pygame.font.Font('freesansbold.ttf', 32)
    winText = font.render('You Win', True, [255,255,255], [0,0,0])
    textRect = winText.get_rect()  
    textRect.center = (size[0]//2, size[1]//2)
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT: sys.exit()
        screen.blit(winText, textRect)
        pygame.display.flip()


main()