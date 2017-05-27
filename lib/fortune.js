var fortuneCookie = [
	'yanghaiyan',
	'weichanghong',
	'yangmeng',
	'xiedongyan',
	'sujingjing'
]
exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookie.length);
	return fortuneCookie[idx];
}