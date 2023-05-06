"use strict";(globalThis["webpackChunksim_v1"]=globalThis["webpackChunksim_v1"]||[]).push([[391],{9391:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var t=a(9835);const o=e=>((0,t.dD)("data-v-553908f6"),e=e(),(0,t.Cn)(),e),n={class:"bg-grey-11"},s={class:"row"},i={class:"col-md-6 col-xs-6"},d={class:"col-md-6 col-xs-6 text-right"},m={class:"row",style:{height:"90vh"}},u={class:"col-md-12 col-sm-12 col-xl-12 col-xs-12 q-pa-md",unelevated:""},r=o((()=>(0,t._)("div",{class:"q-pb-sm q-pt-md q-pl-md bg-grey-3"},[(0,t._)("p",{style:{"font-size":"20px","font-weight":"500",color:"blue"}},"Informasi Hotel")],-1))),p=o((()=>(0,t._)("div",{class:"text-center q-mt-sm q-gutter-lg"},null,-1)));function c(e,l,a,o,c,h){const g=(0,t.up)("q-btn"),b=(0,t.up)("q-input"),k=(0,t.up)("q-select"),_=(0,t.up)("q-icon"),f=(0,t.up)("q-file"),v=(0,t.up)("q-form"),q=(0,t.up)("q-card-section"),w=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",s,[(0,t._)("div",i,[(0,t.Wm)(g,{icon:"folder",disable:"",color:"black",label:"Tambah Hotel","no-caps":"",flat:""})]),(0,t._)("div",d,[(0,t.Wm)(g,{icon:"arrow_back",label:"Kembali","no-caps":"",outline:"",color:"white",class:"bg-grey-5 q-mt-xs q-ml-xs q-mr-lg"})])]),(0,t._)("div",m,[(0,t._)("div",u,[(0,t.Wm)(w,{flat:"",bordered:""},{default:(0,t.w5)((()=>[r,(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v,{onSubmit:h.onSubmit,onReset:h.onReset,class:"q-gutter-sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{outlined:"",label:"Nama Hotel",modelValue:c.nama_hotel,"onUpdate:modelValue":l[0]||(l[0]=e=>c.nama_hotel=e),rules:[e=>e&&e.length>0||"Lengkapi nama hotel"]},null,8,["modelValue","rules"]),(0,t.Wm)(b,{outlined:"",label:"Deskripsi hotel",type:"textarea",modelValue:c.deskripsi,"onUpdate:modelValue":l[1]||(l[1]=e=>c.deskripsi=e),rules:[e=>e&&e.length>0||"Lengkapi deskripsi"]},null,8,["modelValue","rules"]),(0,t.Wm)(k,{outlined:"",modelValue:c.jenis,"onUpdate:modelValue":l[2]||(l[2]=e=>c.jenis=e),options:c.options,label:"Jenis Hotel"},null,8,["modelValue","options"]),(0,t.Wm)(f,{accept:".jpg, image/*",outlined:"",modelValue:c.image,"onUpdate:modelValue":l[3]||(l[3]=e=>c.image=e),label:"Gambar Hotel"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(_,{name:"attach_file"})])),_:1},8,["modelValue"]),(0,t.Wm)(b,{outlined:"",label:"Link hotel",type:"text",modelValue:c.link,"onUpdate:modelValue":l[4]||(l[4]=e=>c.link=e),rules:[e=>e&&e.length>0||"Lengkapi link"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(g,{type:"submit",class:"full-width",color:"primary",label:"Submit",unelevated:""}),p])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])])])}a(9665),a(3703);const h={name:"Login",data(){return{nama_hotel:null,deskripsi:null,image:null,jenis:null,link:null,options:["Hotel Bintang","Hotel Non Bintang"]}},methods:{onSubmit(){try{const e=new FormData;e.append("image",this.image),e.append("data",JSON.stringify({nama_hotel:this.nama_hotel,deskripsi:this.deskripsi,jenis:this.jenis,link:this.link})),this.$api.post("hotel/tambah",e).then((e=>{console.log(e.data),404===e.data.code?this.$showNotif("File Harus Berbenruk Gambar","negative"):200===e.data.code?(this.$router.push({name:"hotel"}),this.$showNotif("Berhasil Upload!","positive")):(console.log("gagal"),this.$showNotif("Gagal Upload","negative"))}))}catch(e){console.error(e)}},onReset(){this.email=null,this.password=null}}};var g=a(1639),b=a(8879),k=a(4458),_=a(3190),f=a(8326),v=a(3119),q=a(1066),w=a(9420),V=a(2857),W=a(9984),x=a.n(W);const y=(0,g.Z)(h,[["render",c],["__scopeId","data-v-553908f6"]]),Z=y;x()(h,"components",{QBtn:b.Z,QCard:k.Z,QCardSection:_.Z,QForm:f.Z,QInput:v.Z,QSelect:q.Z,QFile:w.Z,QIcon:V.Z})}}]);