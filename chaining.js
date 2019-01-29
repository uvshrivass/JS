// Program on function chaining. (Object of funtions)

function a(){
    return {
        b: function(){
            return {
                c: function(){
                    console.log("Hello Ujjwal.")
                }
            }
        }
    }
}

a().b().c()