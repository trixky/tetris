import type CubeInfo from '../../routes/game/cube.info';

export function background_uniform(sprites: Array<string>, id_start: number): Array<CubeInfo> {
    return [...new Array(180)].map((_, index) => <CubeInfo>{id: id_start + index,  x: index % 10, y: Math.floor(index / 10), sprites, z_index: -1 });
}

export function background_chess(a_sprites: Array<string>, b_sprites: Array<string>, id_start: number): Array<CubeInfo> {
    return [...new Array(180)].map((_, index) => {
        const x = index % 10;
        const y = Math.floor(index / 10);

        return <CubeInfo>{
            id: id_start + index,
            x,
            y,
            sprites: (index % 2) == (y % 2) ? a_sprites : b_sprites,
            z_index: -1,
        }
    });
}

export function background_holed_chess(sprites: Array<string>, id_start: number): Array<CubeInfo> {
    return [...new Array(90)].map((_, index) => {
        index *= 2
        const y = Math.floor(index / 10);
        const x = index % 10 + y % 2;

        return <CubeInfo>{
            id: id_start + index,
            x,
            y,
            sprites,
            z_index: -1,
        }
    });
}
