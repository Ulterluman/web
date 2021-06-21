var but1 = document.getElementsByClassName("button1");
var but2 = document.getElementsByClassName("button2");
var but3 = document.getElementsByClassName("button3");
var but3 = document.getElementsByClassName("button4");
var but3 = document.getElementsByClassName("button5");
var img = document.getElementById("img");

var textindex=0;

var index=0;
var imgs=[
    {
    "src":"images/圣斗士星矢.jpg",
    "title":"圣斗士星矢"
    },

    {
    "src":"images/一拳超人.jpg",
    "title":"一拳超人"
    },

    {
    "src":"images/妖精的尾巴.jpg",
    "title":"妖精的尾巴"
    },

    {
    "src":"images/工作细胞.jpg",
    "title":"工作细胞"
    },

    {
    "src":"images/风云.jpg",
    "title":"风云"
    }
]

function qiehuan()
{
    //document.write=img[index].title;

    document.getElementById("img").src=imgs[index].src;
    document.getElementsByClassName("tex1").innerHTML=imgs[index].title;
    index++;
    if(index > 4){
        index=0;    
    }
}

setInterval("qiehuan()",1000);  //每3秒重新运行函数qiehuan()

function clickchange(n)
{
    index=n;
    if(index==0)
    {
        temp=imgs[0].title.substr(0,5);
        document.getElementsByClassName("tex1").innerHTML=imgs[0].title;
        document.getElementById("img").src=imgs[0].src;
    }
    else if(index==1)
    {
        temp=imgs[1].title.substr(0,4);
        document.getElementsByClassName("tex1").innerHTML=imgs[1].title;
        document.getElementById("img").src=imgs[1].src;
    }
    else if(index==2)
    {
        temp=imgs[2].title.substr(0,5);
        document.getElementsByClassName("tex1").innerHTML=imgs[2].title;
        document.getElementById("img").src=imgs[2].src;
    }
    else if(index==3)
    {
        temp=imgs[3].title.substr(0,4);
        document.getElementsByClassName("tex1").innerHTML=imgs[3].title;
        document.getElementById("img").src=imgs[3].src;
    }
    else if(index==4)
    {
        temp=imgs[4].title.substr(0,2);
        document.getElementsByClassName("tex1").innerHTML=imgs[4].title;
        document.getElementById("img").src=imgs[4].src;
    }
}
