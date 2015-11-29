Ext.define('mobapp.store.Xmlreader',{
	extend:'Ext.data.Store',
	model:'mobapp.model.Xmlreader',
	autoLoad:true,
	proxy:{
		type:'ajax',
		url:'/app/store/data.xml',
		reader:{
			type:'xml',
			record:'item'
		}
	}
});

