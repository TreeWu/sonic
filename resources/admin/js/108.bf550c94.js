"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[108],{93108:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"option-tab-wrapper"},[t("a-card",{attrs:{bodyStyle:{padding:0},bordered:!1}},[t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{icon:"cloud-upload",type:"primary"},on:{click:function(t){e.uploadModal.visible=!0}}},[e._v("上传")]),t("a-button",{attrs:{icon:"plus"},on:{click:function(t){return e.handleOpenCreateDirectoryModal({})}}},[e._v(" 新建文件夹")]),t("a-button",{attrs:{loading:e.list.loading,icon:"sync"},on:{click:e.handleListStatics}},[e._v(" 刷新")])],1),t("div",{staticClass:"mt-4"},[t("a-table",{attrs:{columns:e.list.columns,dataSource:e.sortedStatics,loading:e.list.loading,pagination:!1,rowKey:e=>e.id,size:"middle"},scopedSlots:e._u([{key:"name",fn:function(o){return t("span",{},[t("ellipsis",{attrs:{length:64,tooltip:""}},[e._v(" "+e._s(o)+" ")])],1)}},{key:"createTime",fn:function(o){return t("span",{},[e._v(" "+e._s(e._f("moment")(o))+" ")])}},{key:"action",fn:function(o,a){return t("span",{},[a.isFile?t("a",{attrs:{href:e.options.blog_url+a.relativePath,target:"_blank"}},[e._v("访问")]):t("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){return e.handleUpload(a)}}},[e._v("上传")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-dropdown",{attrs:{trigger:["click"]}},[t("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[e._v("更多")]),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a.isFile?e._e():t("a-menu-item",{key:"1",on:{click:function(t){return e.handleOpenCreateDirectoryModal(a)}}},[e._v(" 创建文件夹 ")]),t("a-menu-item",{key:"2"},[t("a-popconfirm",{attrs:{title:a.isFile?"你确定要删除该文件？":"你确定要删除该文件夹？",cancelText:"取消",okText:"确定"},on:{confirm:function(t){return e.handleDelete(a.relativePath)}}},[e._v(" 删除 ")])],1),t("a-menu-item",{key:"3",on:{click:function(t){return e.handleOpenRenameModal(a)}}},[e._v("重命名")]),a.isFile?t("a-menu-item",{key:"4",on:{click:function(t){return e.handleOpenEditContentModal(a)}}},[e._v(" 编辑 ")]):e._e()],1)],1)],1)}}])})],1)]),t("a-modal",{attrs:{afterClose:e.onUploadModalClose,footer:null,destroyOnClose:"",title:"上传文件"},model:{value:e.uploadModal.visible,callback:function(t){e.$set(e.uploadModal,"visible",t)},expression:"uploadModal.visible"}},[t("FilePondUpload",{ref:"upload",attrs:{field:e.list.selected.relativePath,uploadHandler:e.uploadModal.uploadHandler,name:"file"}})],1),t("a-modal",{attrs:{afterClose:e.onDirectoryFormModalClose,title:"创建文件夹"},model:{value:e.directoryForm.visible,callback:function(t){e.$set(e.directoryForm,"visible",t)},expression:"directoryForm.visible"}},[t("template",{slot:"footer"},[t("ReactiveButton",{attrs:{errored:e.directoryForm.saveErrored,loading:e.directoryForm.saving,erroredText:"创建失败",loadedText:"创建成功",text:"创建"},on:{callback:e.handleCreateDirectoryCallback,click:e.handleCreateDirectory}})],1),t("a-form-model",{ref:"directoryForm",attrs:{model:e.directoryForm.model,rules:e.directoryForm.rules,layout:"vertical"}},[t("a-form-model-item",{attrs:{label:"文件夹名：",prop:"name"}},[t("a-input",{ref:"createDirectoryInput",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleCreateDirectory.apply(null,arguments)}},model:{value:e.directoryForm.model.name,callback:function(t){e.$set(e.directoryForm.model,"name",t)},expression:"directoryForm.model.name"}})],1)],1)],2),t("a-modal",{attrs:{afterClose:e.onRenameModalClose,title:"重命名"},model:{value:e.renameForm.visible,callback:function(t){e.$set(e.renameForm,"visible",t)},expression:"renameForm.visible"}},[t("template",{slot:"footer"},[t("ReactiveButton",{attrs:{errored:e.renameForm.saveErrored,loading:e.renameForm.saving,erroredText:"重命名失败",loadedText:"重命名成功",text:"重命名"},on:{callback:e.handleRenameDirectoryOrFileCallback,click:e.handleRenameDirectoryOrFile}})],1),t("a-form-model",{ref:"renameForm",attrs:{model:e.renameForm.model,rules:e.renameForm.rules,layout:"vertical"}},[t("a-form-model-item",{attrs:{label:e.list.selected.isFile?"文件名：":"文件夹名：",prop:"name"}},[t("a-input",{ref:"renameModalInput",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleRenameDirectoryOrFile.apply(null,arguments)}},model:{value:e.renameForm.model.name,callback:function(t){e.$set(e.renameForm.model,"name",t)},expression:"renameForm.model.name"}})],1)],1)],2),t("a-modal",{staticStyle:{"max-width":"1000px"},attrs:{closable:!1,keyboard:!1,maskClosable:!1,title:"编辑文件",width:"80%"},model:{value:e.editContentForm.visible,callback:function(t){e.$set(e.editContentForm,"visible",t)},expression:"editContentForm.visible"}},[t("template",{slot:"footer"},[t("a-popconfirm",{attrs:{cancelText:"取消",okText:"确定",title:"未保存的内容将会丢失，确定要退出吗？"},on:{confirm:e.handleEditContentModalClose}},[t("a-button",[e._v("取消")])],1),t("ReactiveButton",{attrs:{errored:e.editContentForm.saveErrored,loading:e.editContentForm.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存"},on:{callback:e.handleContentEditCallback,click:e.handleContentEdit}})],1),t("a-form",{attrs:{layout:"vertical"}},[t("a-form-item",[t("Codemirror",{ref:"editor",attrs:{height:"600px"},model:{value:e.editContentForm.model.content,callback:function(t){e.$set(e.editContentForm.model,"content",t)},expression:"editContentForm.model.content"}})],1)],1)],2)],1)},r=[],i=o(20629),l=o(73541),n=o(26223),s=o(55597);const d=[{title:"文件名",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"文件类型",dataIndex:"mimeType",scopedSlots:{customRender:"mimeType"}},{title:"上传时间",dataIndex:"createTime",width:"200px",scopedSlots:{customRender:"createTime"}},{title:"操作",dataIndex:"action",width:"120px",scopedSlots:{customRender:"action"}}];var m={components:{Codemirror:n.Z},name:"StaticStorage",data(){return{list:{columns:d,data:[],loading:!1,selected:{}},uploadModal:{visible:!1,uploadHandler:(e,t,o)=>l.Z.staticStorage.upload(e,t,o)},directoryForm:{model:{name:null},visible:!1,saving:!1,saveErrored:!1,rules:{name:[{required:!0,message:"* 文件夹名不能为空",trigger:["change"]}]}},renameForm:{model:{name:null},visible:!1,saving:!1,saveErrored:!1,rules:{name:[{required:!0,message:"* 文件夹名不能为空",trigger:["change"]}]}},editContentForm:{model:{content:null},visible:!1,saving:!1,saveErrored:!1}}},beforeMount(){this.handleListStatics()},computed:{...(0,i.Se)(["options"]),sortedStatics(){const e=this.list.data.slice(0);return e.sort((function(e,t){return e.isFile-t.isFile}))}},methods:{handleListStatics(){this.list.loading=!0,l.Z.staticStorage.list().then((e=>{this.list.data=e.data})).finally((()=>{this.list.loading=!1}))},handleDelete(e){l.Z.staticStorage.delete(e).then((()=>{this.$message.success("删除成功！")})).finally((()=>{this.handleListStatics()}))},handleUpload(e){this.list.selected=e,this.uploadModal.visible=!0},handleOpenCreateDirectoryModal(e){this.list.selected=e,this.directoryForm.visible=!0,this.$nextTick((()=>{this.$refs.createDirectoryInput.focus()}))},handleCreateDirectory(){this.$refs.directoryForm.validate((e=>{if(e){this.directoryForm.saving=!0;const e=this.list.selected.relativePath||"/";l.Z.staticStorage.createFolder(e,this.directoryForm.model.name).catch((()=>{this.directoryForm.saveErrored=!0})).finally((()=>{setTimeout((()=>{this.directoryForm.saving=!1}),400)}))}}))},handleCreateDirectoryCallback(){this.directoryForm.saveErrored?this.directoryForm.saveErrored=!1:(this.directoryForm.model={},this.directoryForm.visible=!1,this.handleListStatics())},handleOpenRenameModal(e){this.list.selected=e,this.$set(this.renameForm.model,"name",e.name),this.renameForm.visible=!0,this.$nextTick((()=>{const e=this.$refs.renameModalInput,t=e.value.split(".");e.focus(),t.length<=1?e.$el.setSelectionRange(0,e.value.length):e.$el.setSelectionRange(0,e.value.length-t.pop().length-1)}))},handleRenameDirectoryOrFile(){this.$refs.renameForm.validate((e=>{e&&(this.renameForm.saving=!0,l.Z.staticStorage.rename(this.list.selected.relativePath,this.renameForm.model.name).catch((()=>{this.renameForm.saveErrored=!0})).finally((()=>{setTimeout((()=>{this.renameForm.saving=!1}),400)})))}))},handleRenameDirectoryOrFileCallback(){this.renameForm.saveErrored?this.renameForm.saveErrored=!1:(this.renameForm.model={},this.renameForm.visible=!1,this.handleListStatics())},handleOpenEditContentModal(e){this.list.selected=e,s.Axios.get(this.options.blog_url+e.relativePath).then((e=>{this.editContentForm.model.content=e.data+"",this.editContentForm.visible=!0,this.$nextTick((()=>{this.$refs.editor.handleInitCodemirror()}))}))},handleContentEdit(){this.editContentForm.saving=!0,l.Z.staticStorage.saveContent({path:this.list.selected.relativePath,content:this.editContentForm.model.content}).catch((()=>{this.editContentForm.saveErrored=!0})).finally((()=>{setTimeout((()=>{this.editContentForm.saving=!1}),400)}))},handleContentEditCallback(){this.editContentForm.saveErrored?this.editContentForm.saveErrored=!1:(this.editContentForm.model={},this.editContentForm.visible=!1,this.handleListStatics())},onDirectoryFormModalClose(){this.list.selected={},this.$set(this.directoryForm.model,"name",null)},onRenameModalClose(){this.list.selected={},this.$set(this.renameForm.model,"name",null)},onUploadModalClose(){this.$refs.upload.handleClearFileList(),this.list.selected={},this.handleListStatics()},handleEditContentModalClose(){this.editContentForm.visible=!1,this.list.selected={},this.editContentForm.model.content=""}}},c=m,h=o(1001),u=(0,h.Z)(c,a,r,!1,null,null,null),p=u.exports}}]);