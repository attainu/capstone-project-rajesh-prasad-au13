let domain = ""
if(process.env === 'production'){
    domain = process.env.port
}
else{
    domain = "locahost:3000"
}
export default domain

