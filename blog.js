             // <script type="text/javascript">
                function check()
                {

                  var parr = JSON.parse(localStorage.getItem("us"));

                  for(i in parr)
                  {
                    if( document.forms[0].u1.value == parr[i].username && document.forms[0].p1.value== parr[i].password)
                    {
                      alert("you are a verified user");
                      var flag=1;

                      var usi = document.forms[0].u1.value;
                      console.log(usi);
                      localStorage.setItem("key",usi);
                      console.log(usi);
                      return true;

                    }
                  }
                  if(flag!=1)
                  {
                    alert("wrong credentials");
                    return false;

                  }
                }

              


              ///<script type="text/javascript">


                function register()
                {

                 var obj = JSON.parse(localStorage.getItem("us"));

                 if(obj != null)
                 {

                   users = { "username" : document.forms[1].x.value , "password" : document.forms[1].y.value } ;
                   obj.push(users);


                   localStorage.setItem("us",JSON.stringify(obj));
                   alert(" More data stored");
                 }
                 else
                 {
                  var arr= [];

                  users = { "username" : document.forms[1].x.value , "password" : document.forms[1].y.value } ;
                  arr.push(users);

                  
                  localStorage.setItem("us",JSON.stringify(arr));
                  alert("data stored");
                }
              }
           // </script>


           //<script type="text/javascript">

  function loadDoc(){

    var s,s1,obj;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
      if(this.readyState == 4 && this.status == 200){
          //document.getElementById("ajax").innerHTML = this.responseText;
          s=this.responseText;
          //s1=JSON.stringify(s);
          obj=JSON.parse(s);
          document.getElementById("ci1").src=obj[0].imageUrl;
          document.getElementById("ctit1").innerHTML=obj[0].title;
          document.getElementById("ct1").innerHTML=obj[0].content;

          document.getElementById("ci2").src=obj[3].imageUrl;
          document.getElementById("ctit2").innerHTML=obj[3].title;
          document.getElementById("ct2").innerHTML=obj[3].content;

          document.getElementById("ci3").src=obj[2].imageUrl;
          document.getElementById("ctit3").innerHTML=obj[2].title;
          document.getElementById("ct3").innerHTML=obj[2].content;

        }

        

      };
      xhttp.open("GET","http://koushikmln.com:7500/blogs",true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send();

    }


    function callblog(x)
    {
      console.log(x);
      localStorage.setItem("id",x);
    }

    var xhttp=new XMLHttpRequest();
  xhttp.open("GET","http://koushikmln.com:7500/blogs",true);//true defines asynchronous requests
  //send headers
  xhttp.setRequestHeader("Content-type","application/json");
  xhttp.send();

  xhttp.onreadystatechange = function()
  {
        if(this.readyState == 4 && this.status == 200)//200 is a success message(responce code)(2xx are success codes)
        {
          //document.getElementById("ajax").innerHTML=this.responseText;
          var x=JSON.parse(this.responseText);
          //console.log(x[0]);


          document.getElementById("ci1").src=x[0].imageUrl;
          document.getElementById("ctit1").innerHTML=x[0].title;
          document.getElementById("ct1").innerHTML=x[0].content;
          document.getElementById("span1").innerHTML=x[0].id;

          document.getElementById("ci2").src=x[1].imageUrl;
          document.getElementById("ctit2").innerHTML=x[1].title;
          document.getElementById("ct2").innerHTML=x[1].content;
          document.getElementById("span2").innerHTML=x[1].id;

          document.getElementById("ci3").src=x[2].imageUrl;
          document.getElementById("ctit3").innerHTML=x[2].title;
          document.getElementById("ct3").innerHTML=x[2].content;
          document.getElementById("span3").innerHTML=x[2].id;

        }
      }

    //</script>