const pareExp=/\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString){
    const lyricStrings=lyricString.split("\n")
    const lyricArr=[]
    for(let line of lyricStrings){
        if(line){
            const result=pareExp.exec(line)
           
            if(!result) continue
            const time1=result[1]*60*1000
            const time2=result[2]*1000
            const time3=result[3].length===3?result[3]*1:result[3]*10;
            const time=time1+time2+time3;
            const content=line.replace(pareExp,"").trim();
            const lineObj={time,content};
           
            lyricArr.push(lineObj)
        }

    }
    return lyricArr
}
