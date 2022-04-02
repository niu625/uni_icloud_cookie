'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('label')
	const res = await collection.get()
	//event为客户端上传的参数
	
	//返回数据给客户端
	return {
		code:0,
		labelList:res.data
	}
};
