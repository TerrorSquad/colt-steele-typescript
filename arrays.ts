const activeUsers: string[] = ['goran']
activeUsers.push('steven');
// activeUsers.push(42);out

const ageList: number[] = [42, 56, 13];
ageList[0] = 99;
// ageList[1] = 'foobar';

type Point = {
    x: number,
    y: number
}

const coords: Array<Point> = []
coords.push({x: 0, y: 0})

const board: string[][] = [
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
    ['x', 'o', 'x'],
]


const demo: number[][][] = [[[1]]]
