Ext.define('mobapp.controller.Content',{
	extend:'Ext.app.Controller',
	config:{
		refs: {
		    
		},
		control:{
			'content list':{
				itemtap:function(list,index,target,record){
					console.log( 'user: '+record.get('name')+' '+record.get('surname') );
				}
			}
		}
	}
})