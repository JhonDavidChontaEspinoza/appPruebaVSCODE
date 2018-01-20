function persona(nombre,apellidos,edad){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad;
    this.mySaludo=Salaudar;
};

    function  LlamarJSON(){
        var objJson='{"name":"Jhon","email":"Jhon_David_Chonta@hotmail.com","salary":1500}';
       
        var miObjeto=JSON.parse(objJson);
        //var miObjeto=eval('('+objJson+')');
        document.write("Mi nombre es:"+miObjeto.name+"mi Correo es:"+miObjeto.email+" mi sueldo es:"+miObjeto.salary);
    };
   function Saludar(){
       alert('Hola Buenos Dias :)');
   };

        
  
      
