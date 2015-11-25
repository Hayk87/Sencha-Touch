Ext.define('mobapp.store.Content',{
	extend:'Ext.data.Store',
	model:'mobapp.model.Content',
	autoLoad:true,
	proxy:{
		type:'ajax',
		url:'/app/store/data.xml',
		reader:{
			type:'xml',
			record:'item'
			//rootProperty:'result'
		}
	}
})

//http://ria.ru/export/rss2/world/index.xml