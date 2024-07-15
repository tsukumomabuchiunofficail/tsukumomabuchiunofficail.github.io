export default interface SakuraConfig {
    count: number,
    leftRange: {
        start:number,
        end:number
    },
    speed: {
        fall:{
            start:number,
            end:number
        },
        rotation:{
            start:number,
            end:number
        }
    }
    timeRange: {
        start:number,
        end:number
    },
    images: {
        folder: string,
        files:string[]
    }
}