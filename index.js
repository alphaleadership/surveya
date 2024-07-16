const yaml=require("json-to-pretty-yaml")
const fs=require("fs")
const site =fs.readFileSync("./sites").toString().split("\n")
fs.writeFileSync("./sites.yaml",yaml.stringify({sites:site.map((sit,i)=>{
    return {url:sit,name:i}
})}))