import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-thuchanh1',
  templateUrl: './thuchanh1.component.html',
  styleUrls: ['./thuchanh1.component.css']
})

export class Thuchanh1Component implements OnInit {
  result1: any;
  result2: any;
  result3: any;
  result4: any;
  result5: any;
  x:number = 2;
  n:number = 5;
  ds = [
    {hoten: 'Nguyen Thi Mai', diemthi:9},
    {hoten: 'Tran Thi Anh', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', diemthi:8.3}
  ]; 
  ds1 = []; ds4 = [];
  ds2 = [
    {hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi:9}, 
    {hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi:8.3}];
  ds3=[];
  constructor() { }
  tinhmu(x : number, n: number){
    var s = 1;
    for(var i = 1; i<=n;i++){
      s = s * x;
    }
    return s;
  }
  tinhgiathu(n:number){
    if(n<2){
      return 1;
    }
    else{
      return n * this.tinhgiathu(n-1);
    }
  }
  bai1(x: number, n: number){
    var s = 0;
    var h = String(x);
    for(var i=1;i<=n;i++){
      s = s + this.tinhmu(x,i);
      if(i!=1){
        h = h + " + " + String(x)+"^"+ String(i);
      }
    }
    return h + " = " + String(s);
  }
  bai2(x: number, n:number){
    var s = 0;
    var h = "-"+String(x);
    for(var i =1;i<=n;i++){
      var a = Math.pow(-1,i)*Math.pow(x,i);
      s = s + a/this.tinhgiathu(i);
      if(i%2==0&& i!=1){
        h = h + " + " +  String(x)+"^"+ String(i)+"/"+String(i) + "!";
      }
      if(i%2!=0&& i!=1){
        h = h + " - " +  String(x)+"^"+ String(i)+"/"+String(i) + "!";
      }
    }
    return h + " = " + s;
  }
  changeso(){
    this.result1 = "Bài 1: " + this.bai1(this.x,this.n);
    this.result2 = "Bài 2: " + this.bai2(this.x,this.n);
  }
  a:any;
  b:any;
  bai3(){
    this.ds1 = this.ds;
    // this.ds1.sort((a, b) => {
    //   console.log(a.hoten);
    //   console.log(b.hoten);
    //   console.log(a.hoten < b.hoten);
    //   if (a.hoten < b.hoten) return -1;
    //   else if (a.hoten > b.hoten) return 1;
    //   else return 0;
    // });
    // this.ds1.forEach((item,index) =>{
      
    // });
    for(var i = 0;i<this.ds1.length-1;i++){
      for(var j = i+1; j<this.ds1.length;j++){
        console.log(this.ds1[i].hoten);
        console.log(this.ds1[j].hoten);
        console.log(this.ds1[i].hoten <= this.ds1[j].hoten);
        if(this.ds1[i].hoten < this.ds1[j].hoten){
          this.a = this.ds1[i].hoten;
          this.b = this.ds1[i].diemthi;
          this.ds1[i].hoten = this.ds1[j].hoten;
          this.ds1[i].diemthi = this.ds1[j].diemthi;
          this.ds1[j].hoten = this.a;
          this.ds1[j].diemthi = this.b;
        }
      }
    }
  }
  bai4(){
    this.ds2.forEach( (item, index) => {
      if(item.quequan == "Hai Phong" && item.diemthi > 8){
        this.ds3.push(item);
      }});;
  }
  dayso = [12, 16, 14, 20, 30, 25];
  dayso1 = [];
  bai5(){   
    for(var i = 0 ; i < this.dayso.length;i++){
      if(this.dayso[i] == Math.pow(Math.round(Math.sqrt(this.dayso[i])),2)){
        this.dayso1.push(this.dayso[i]);
      }   
    }
  }
  dayso3 = [-12,12, 16, 14, 20, 30, 25,-8];
  bai6(){ 
    var s = 0;  
    let h ="";
    for(var i = 0 ; i < this.dayso3.length;i++){
      if(this.dayso3[i]>=0){
        s = s + this.dayso3[i];
        if(h.length == 0){
          h = String(this.dayso3[i]);
        }
        else{
          h = h + " + " + String(this.dayso3[i]);
        }
      }   
    }
    return h +" = "+ s;
  }
  soa = 1;
  sob = -7;
  soc = 12;
  ptt = new pttrungphuong(this.soa,this.sob,this.soc);
  hc = new hinhchop(3,4,5,4);
  ngOnInit(): void {
    this.result1 = "Bài 1: " + this.bai1(this.x,this.n);
    this.result2 = "Bài 2: " + this.bai2(this.x,this.n);
    this.bai3();
    this.bai4();
    this.bai5();
    this.result4 = this.bai6();
    this.result3 = this.ptt.Giaipttrungphuong();
    this.result5 = this.hc.thetich();
  } 
}
class ptbachai{
  protected a:number;
  protected b:number;
  protected c:number;
  constructor(a:number,b:number,c:number){
    this.a = a;
    this.b = b;
    this.c = c;
  }
  public Giaiphuongtrinh(){
    var d = Math.pow(this.b,2) - 4*this.a*this.c;
    var ds = [];
    console.log(d);
    if(d==0){
      console.log(-this.b/(2*this.a));
      ds.push(-this.b/(2*this.a));
    }
    if(d>0){
      ds.push((-this.b + Math.sqrt(d))/(2*this.a));
      ds.push((-this.b - Math.sqrt(d))/(2*this.a));
    }
    console.log(ds);
    return ds;
  }
} 
class pttrungphuong extends ptbachai{
  constructor(a:number,b:number,c:number){
    super(a,b,c);
  }
  public Giaipttrungphuong(){
    var result = this.Giaiphuongtrinh();
    var kq = this.a + "x^4 + " +this.b +"x^2 + " + this.c +" có nghiệm: ";
    if(result.length <=0){
      kq = kq + "Phương trình vô nghiệm";
    }
    else{
      var j = 1; var dem = 0;
      for(var i=0;i<result.length;i++){
        if(result[i]>0){
          var x = Math.sqrt(result[i]);
          kq = kq + "   x"+j+" = " + String(x)+"  ,"+"   x"+String(j+1)+" = " + String(-x) +", ";
          j = j + 2;
          dem ++;
        }
      }
      if(dem==0){
        kq = kq + "Phương trình vô nghiệm";
      }
    }
    return kq;
  }
}
class tamgiac{
  protected a:number;
  protected b:number;
  protected c:number;
  constructor(a:number,b:number,c:number){
    this.a = a;
    this.b = b;
    this.c = c;
  }
  public dientich(){
    var p = (this.a+this.b+this.c)/2;
    var s = p*(p-this.a)*(p-this.b)*(p-this.c);
    return Math.sqrt(s);
  }
}
class hinhchop extends tamgiac{
  protected h:number;
  constructor(a:number,b:number,c:number,h:number){
    super(a,b,c);
    this.h = h;
  }
  public thetich(){
    console.log(this.dientich());
    return 1/3*this.dientich()*this.h;
  }
}

