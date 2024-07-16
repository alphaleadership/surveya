const yaml=require("json-to-pretty-yaml")
const url=require("url")
const fs=require("fs")
const site =fs.readFileSync("./sites").toString().split("\n")
fs.writeFileSync("./sites.yaml",yaml.stringify({sites:site.map((sit,i)=>{
    console.log(sit)
    const gamma=new url.URL(sit.replace("\r",""))
    return {url:sit.replace("\r",""),name:gamma.hostname}
})}))