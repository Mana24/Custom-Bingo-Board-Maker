export default {
   presets: [["@babel/preset-react", { "runtime": "automatic" }]],
   plugins: [
     [
       "@babel/plugin-transform-react-jsx",
       {
         "importSource": "preact",
         "runtime": "automatic"
       }
     ]
   ]
 }
 