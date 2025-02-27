"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[125],{31125:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var i=function(){var e=this,t=e._self._c;return t("page-view",[t("a-row",{attrs:{gutter:12}},[e.options.developer_mode?t("a-col",{staticClass:"pb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[t("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"experiment"}}),e._v(" 开发者选项 ")],1),t("p",{staticStyle:{"min-height":"50px"}},[e._v("点击进入开发者选项页面")]),t("a-button",{staticClass:"float-right",attrs:{type:"primary"},on:{click:function(t){return e.handleToDeveloperOptions()}}},[e._v("进入")])],1)],1):e._e(),t("a-col",{staticClass:"mb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[t("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"hdd"}}),e._v(" 博客备份 ")],1),t("p",{staticStyle:{"min-height":"50px"}},[e._v("支持备份全站数据和数据导出，支持下载到本地")]),t("a-dropdown",{staticClass:"float-right"},[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"1",on:{click:function(t){e.backupWorkDirDrawerVisible=!0}}},[e._v(" 整站备份 ")]),t("a-menu-item",{key:"2",on:{click:function(t){e.exportDataDrawerVisible=!0}}},[e._v(" 数据导出 ")]),t("a-menu-item",{key:"3",on:{click:function(t){e.exportMarkdownDrawerVisible=!0}}},[e._v(" 导出文章为 Markdown 文档 ")])],1),t("a-button",{staticClass:"ml-2"},[e._v(" 备份 "),t("a-icon",{attrs:{type:"down"}})],1)],1)],1)],1),t("a-col",{staticClass:"pb-3",attrs:{lg:6,md:12,sm:24,xl:6,xs:24}},[t("a-card",{attrs:{bodyStyle:{padding:"16px"},bordered:!1}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"file-markdown"}}),e._v(" Markdown 文章导入 ")],1),t("p",{staticStyle:{"min-height":"50px"}},[e._v("支持 Hexo/Jekyll 文章导入并解析元数据")]),t("a-button",{staticClass:"float-right",attrs:{type:"primary"},on:{click:function(t){e.markdownUpload=!0}}},[e._v("导入")])],1)],1)],1),t("a-modal",{attrs:{afterClose:e.onUploadClose,footer:null,destroyOnClose:"",title:"Markdown 文章导入"},model:{value:e.markdownUpload,callback:function(t){e.markdownUpload=t},expression:"markdownUpload"}},[t("FilePondUpload",{ref:"upload",attrs:{uploadHandler:e.uploadHandler,label:"拖拽或点击选择 Markdown 文件到此处",name:"file"}})],1),t("BackupWorkDirDrawer",{model:{value:e.backupWorkDirDrawerVisible,callback:function(t){e.backupWorkDirDrawerVisible=t},expression:"backupWorkDirDrawerVisible"}}),t("ExportDataDrawer",{model:{value:e.exportDataDrawerVisible,callback:function(t){e.exportDataDrawerVisible=t},expression:"exportDataDrawerVisible"}}),t("ExportMarkdownDrawer",{model:{value:e.exportMarkdownDrawerVisible,callback:function(t){e.exportMarkdownDrawerVisible=t},expression:"exportMarkdownDrawerVisible"}})],1)},l=[],o=(a(57658),a(28810)),r=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"整站备份"},on:{close:e.onClose}},[t("a-row",{attrs:{align:"middle",type:"flex"}},[t("a-col",{attrs:{span:24}},[t("a-alert",{attrs:{banner:"",closable:"",message:"注意：备份后生成的压缩文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),t("a-divider",[e._v("历史备份")]),t("a-list",{attrs:{dataSource:e.backups,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(a){return t("a-list-item",{},[t("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:a.deleting,icon:"delete",type:"link"},on:{click:function(t){return e.handleBackupDeleteClick(a)}},slot:"extra"},[e._v("删除 ")]),t("a-list-item-meta",[t("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(t){return e.handleDownloadBackupPackage(a)}},slot:"title"},[t("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(a.filename)+" ")],1),t("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(a.updateTime))+"/"+e._s(e._f("fileSizeFormat")(a.fileSize)))])])],1)}}])})],1)],1),t("a-divider",{staticClass:"divider-transparent"}),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-button",{attrs:{icon:"download",type:"primary"},on:{click:e.handleBackupClick}},[e._v("备份")]),t("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1),t("a-modal",{attrs:{title:"备份选项"},model:{value:e.optionsModal.visible,callback:function(t){e.$set(e.optionsModal,"visible",t)},expression:"optionsModal.visible"}},[t("template",{slot:"footer"},[t("a-button",{on:{click:()=>e.optionsModal.visible=!1}},[e._v("取消")]),t("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",loadedText:"备份成功",text:"确认",type:"primary"},on:{callback:e.handleBackupedCallback,click:e.handleBackupConfirmed}})],1),t("a-checkbox-group",{staticStyle:{width:"100%"},model:{value:e.optionsModal.selected,callback:function(t){e.$set(e.optionsModal,"selected",t)},expression:"optionsModal.selected"}},[t("a-row",e._l(e.optionsModal.options,(function(a){return t("a-col",{key:a,attrs:{span:8}},[t("a-checkbox",{attrs:{value:a}},[e._v(" "+e._s(a)+" ")])],1)})),1)],1)],2)],1)},n=[],s=(a(46229),a(17330),a(62062),a(3775)),d=a(73541),c={name:"BackupWorkDirDrawer",mixins:[s.jB,s.KT],data(){return{backuping:!1,loading:!1,backupErrored:!1,backups:[],optionsModal:{options:[],visible:!1,selected:[]}}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged(e){e&&this.handleListBackups()},handleListBackups(){this.loading=!0,d.Z.backup.listWorkdirBackups().then((e=>{this.backups=e.data})).finally((()=>{this.loading=!1}))},handleBackupClick(){d.Z.backup.getWorkdirBackupOptions().then((e=>{this.optionsModal={visible:!0,options:e.data,selected:e.data}}))},handleBackupConfirmed(){this.backuping=!0,d.Z.backup.backupWorkdir(this.optionsModal.selected).catch((()=>{this.backupErrored=!0})).finally((()=>{setTimeout((()=>{this.backuping=!1}),400)}))},handleBackupedCallback(){this.backupErrored?this.backupErrored=!1:(this.optionsModal.visible=!1,this.handleListBackups())},handleBackupDeleteClick(e){e.deleting=!0,d.Z.backup.deleteWorkdirBackup(e.filename).finally((()=>{setTimeout((()=>{e.deleting=!1}),400),this.handleListBackups()}))},handleDownloadBackupPackage(e){d.Z.backup.getWorkdirBackup(e.filename).then((e=>{const t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((e=>{this.$message.error(e.data.message)}))},onClose(){this.$emit("close",!1)}}},p=c,u=a(1001),k=(0,u.Z)(p,r,n,!1,null,null,null),h=k.exports,b=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"数据导出"},on:{close:e.onClose}},[t("a-row",{attrs:{align:"middle",type:"flex"}},[t("a-col",{attrs:{span:24}},[t("a-alert",{attrs:{banner:"",closable:"",message:"注意：导出后的数据文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),t("a-divider",[e._v("历史文件")]),t("a-list",{attrs:{dataSource:e.files,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(a){return t("a-list-item",{},[t("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:a.deleting,icon:"delete",type:"link"},on:{click:function(t){return e.handleFileDeleteClick(a)}},slot:"extra"},[e._v("删除 ")]),t("a-list-item-meta",[t("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(t){return e.handleDownloadBackupFile(a)}},slot:"title"},[t("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(a.filename)+" ")],1),t("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(a.updateTime))+"/"+e._s(e._f("fileSizeFormat")(a.fileSize)))])])],1)}}])})],1)],1),t("a-divider",{staticClass:"divider-transparent"}),t("div",{staticClass:"bottom-control"},[t("a-space",[t("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",icon:"download",loadedText:"备份成功",text:"备份",type:"primary"},on:{callback:e.handleBackupedCallback,click:e.handleExportClick}}),t("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1)],1)},m=[],f={name:"ExportDataDrawer",mixins:[s.jB,s.KT],data(){return{backuping:!1,loading:!1,backupErrored:!1,files:[]}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged(e){e&&this.handleListBackups()},handleListBackups(){this.loading=!0,d.Z.backup.listDataBackups().then((e=>{this.files=e.data})).finally((()=>{this.loading=!1}))},handleExportClick(){this.backuping=!0,d.Z.backup.backupData().catch((()=>{this.backupErrored=!0})).finally((()=>{setTimeout((()=>{this.backuping=!1}),400)}))},handleBackupedCallback(){this.backupErrored?this.backupErrored=!1:this.handleListBackups()},handleFileDeleteClick(e){e.deleting=!0,d.Z.backup.deleteDataBackup(e.filename).finally((()=>{setTimeout((()=>{e.deleting=!1}),400),this.handleListBackups()}))},handleDownloadBackupFile(e){d.Z.backup.getDataBackup(e.filename).then((e=>{const t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((()=>{this.$message.error("下载失败！")}))},onClose(){this.$emit("close",!1)}}},v=f,g=(0,u.Z)(v,b,m,!1,null,null,null),w=g.exports,y=function(){var e=this,t=e._self._c;return t("a-drawer",{attrs:{afterVisibleChange:e.handleAfterVisibleChanged,visible:e.visible,width:e.isMobile()?"100%":"480",closable:"",destroyOnClose:"",title:"导出文章为 Markdown 文档"},on:{close:e.onClose}},[t("a-row",{attrs:{align:"middle",type:"flex"}},[t("a-col",{attrs:{span:24}},[t("a-alert",{attrs:{banner:"",closable:"",message:"注意：导出后的数据文件存储在临时文件中，重启服务器会造成备份文件的丢失，所以请尽快下载。"}}),t("a-divider",[e._v("历史文件")]),t("a-list",{attrs:{dataSource:e.files,loading:e.loading,itemLayout:"vertical",size:"small"},scopedSlots:e._u([{key:"renderItem",fn:function(a){return t("a-list-item",{},[t("a-button",{staticStyle:{color:"red"},attrs:{slot:"extra",loading:a.deleting,icon:"delete",type:"link"},on:{click:function(t){return e.handleFileDeleteClick(a)}},slot:"extra"},[e._v("删除 ")]),t("a-list-item-meta",[t("a",{attrs:{slot:"title",href:"javascript:void(0)"},on:{click:function(t){return e.handleDownloadMarkdownPackage(a)}},slot:"title"},[t("a-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"schedule"}}),e._v(" "+e._s(a.filename)+" ")],1),t("p",{attrs:{slot:"description"},slot:"description"},[e._v(e._s(e._f("timeAgo")(a.updateTime))+"/"+e._s(e._f("fileSizeFormat")(a.fileSize)))])])],1)}}])})],1)],1),t("a-divider",{staticClass:"divider-transparent"}),t("div",{staticClass:"bottom-control"},[t("a-space",[t("a-popconfirm",{attrs:{cancelText:"否",okText:"是",title:"是否同时为 Markdown 文档生成 Front Matter？"},on:{cancel:function(t){return e.handleExportClick(!1)},confirm:function(t){return e.handleExportClick(!0)}}},[t("ReactiveButton",{attrs:{errored:e.backupErrored,loading:e.backuping,erroredText:"备份失败",icon:"download",loadedText:"备份成功",text:"备份",type:"primary"},on:{callback:e.handleBackupedCallback}})],1),t("a-button",{attrs:{loading:e.loading,icon:"reload",type:"dashed"},on:{click:e.handleListBackups}},[e._v("刷新")])],1)],1)],1)},x=[],C={name:"ExportDataDrawer",mixins:[s.jB,s.KT],data(){return{backuping:!1,loading:!1,backupErrored:!1,files:[]}},model:{prop:"visible",event:"close"},props:{visible:{type:Boolean,required:!1,default:!0}},methods:{handleAfterVisibleChanged(e){e&&this.handleListBackups()},handleListBackups(){this.loading=!0,d.Z.backup.listMarkdownBackups().then((e=>{this.files=e.data})).finally((()=>{this.loading=!1}))},handleExportClick(e=!1){this.backuping=!0,d.Z.backup.backupMarkdown({needFrontMatter:e}).catch((()=>{this.backupErrored=!0})).finally((()=>{setTimeout((()=>{this.backuping=!1}),400)}))},handleBackupedCallback(){this.backupErrored?this.backupErrored=!1:this.handleListBackups()},handleFileDeleteClick(e){e.deleting=!0,d.Z.backup.deleteMarkdownBackup(e.filename).finally((()=>{setTimeout((()=>{e.deleting=!1}),400),this.handleListBackups()}))},handleDownloadMarkdownPackage(e){d.Z.backup.getMarkdownBackup(e.filename).then((e=>{const t=document.createElement("a"),a=new window.URL(e.data.downloadLink);t.href=a,t.download=e.data.filename,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(a)})).catch((()=>{this.$message.error("下载失败！")}))},onClose(){this.$emit("close",!1)}}},_=C,D=(0,u.Z)(_,y,x,!1,null,null,null),B=D.exports,M=a(20629),L={components:{PageView:o.B4,BackupWorkDirDrawer:h,ExportDataDrawer:w,ExportMarkdownDrawer:B},data(){return{backupWorkDirDrawerVisible:!1,exportDataDrawerVisible:!1,exportMarkdownDrawerVisible:!1,markdownUpload:!1,uploadHandler:(e,t)=>d.Z.backup.importMarkdown(e,t)}},computed:{...(0,M.Se)(["options"])},methods:{handleChange(e){const t=e.file.status;"uploading"!==t&&this.$log.debug(e.file,e.fileList),"done"===t?this.$message.success(`${e.file.name} 导入成功！`):"error"===t&&this.$message.error(`${e.file.name} 导入失败！`)},handleToDeveloperOptions(){this.$router.push({name:"DeveloperOptions"})},onUploadClose(){this.$refs.upload.handleClearFileList()}}},S=L,E=(0,u.Z)(S,i,l,!1,null,null,null),T=E.exports},70648:function(e,t,a){var i=a(51694),l=a(60614),o=a(84326),r=a(5112),n=r("toStringTag"),s=Object,d="Arguments"===o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(a){}};e.exports=i?o:function(e){var t,a,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=c(t=s(e),n))?a:d?o(t):"Object"===(i=o(t))&&l(t.callee)?"Arguments":i}},47045:function(e,t,a){var i=a(56339),l=a(3070);e.exports=function(e,t,a){return a.get&&i(a.get,t,{getter:!0}),a.set&&i(a.set,t,{setter:!0}),l.f(e,t,a)}},51694:function(e,t,a){var i=a(5112),l=i("toStringTag"),o={};o[l]="z",e.exports="[object z]"===String(o)},41340:function(e,t,a){var i=a(70648),l=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return l(e)}},48053:function(e){var t=TypeError;e.exports=function(e,a){if(e<a)throw t("Not enough arguments");return e}},46229:function(e,t,a){var i=a(98052),l=a(1702),o=a(41340),r=a(48053),n=URLSearchParams,s=n.prototype,d=l(s.append),c=l(s["delete"]),p=l(s.forEach),u=l([].push),k=new n("a=1&a=2&b=3");k["delete"]("a",1),k["delete"]("b",void 0),k+""!=="a=2"&&i(s,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var i=[];p(this,(function(e,t){u(i,{key:t,value:e})})),r(t,1);var l,n=o(e),s=o(a),k=0,h=0,b=!1,m=i.length;while(k<m)l=i[k++],b||l.key===n?(b=!0,c(this,l.key)):h++;while(h<m)l=i[h++],l.key===n&&l.value===s||d(this,l.key,l.value)}),{enumerable:!0,unsafe:!0})},17330:function(e,t,a){var i=a(98052),l=a(1702),o=a(41340),r=a(48053),n=URLSearchParams,s=n.prototype,d=l(s.getAll),c=l(s.has),p=new n("a=1");!p.has("a",2)&&p.has("a",void 0)||i(s,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return c(this,e);var i=d(this,e);r(t,1);var l=o(a),n=0;while(n<i.length)if(i[n++]===l)return!0;return!1}),{enumerable:!0,unsafe:!0})},62062:function(e,t,a){var i=a(19781),l=a(1702),o=a(47045),r=URLSearchParams.prototype,n=l(r.forEach);i&&!("size"in r)&&o(r,"size",{get:function(){var e=0;return n(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);