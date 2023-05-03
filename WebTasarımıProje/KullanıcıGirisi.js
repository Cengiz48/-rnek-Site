
function GirisKontrol(){
    var Kullaniciadi=document.getElementById('KullanıcıAdı').value;
    var Sifre=document.getElementById('Şifre').value;
    
   

    
    if (Kullaniciadi=="ead"){
        
        if (Sifre=="ead1")
        {
            console.log(Kullaniciadi,Sifre)
            console.log("Başarılı");
            document.getElementById("giriştext").innerHTML="Giriş Başarılı";
            alert("Giriş Başarılı");
            window.location.href="Anasayfa.html";
            return true;
            
        }
    }
    else{
        
        console.log("Başarısız");
        console.log(Kullaniciadi);
        document.getElementById("giriştext").innerHTML ="Kullanıcı Adı veya Şifre Hatalı...";
        alert("Kullanıcı Adı veya Şifre Hatalı...");
        
        return false;
    }
}