let url = '';
if (process.env.NODE_ENV === 'development') {
	// #ifdef TEST
	// 测试环境  https://h5.api.woow100.com

	//正式环境 https://mini.puzigou.com
	
	
	
	// 测试环境  
	url = 'https://h5.api.woow100.com';
	// #endif
	// #ifdef DEV
	//开发环境
	url = 'https://mini.puzigou.com';
	// #endif
	// #ifdef ONLINE
	//生产环境
	url = 'https://mini.puzigou.com';
	// #endif
} else {
	// #ifdef TEST
	// 测试环境
	url = 'https://h5.api.woow100.com';
	// #endif
	// #ifdef DEV
	//开发环境
	url = 'https://mini.puzigou.com';
	// #endif
	// #ifdef ONLINE
	//生产环境
	url = 'https://mini.puzigou.com';
	// #endif
}

export const baseUrl = url;
