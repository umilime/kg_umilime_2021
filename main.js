function one_to_one(s1,s2){

    if(s1==null || s2==null || s1.length>s2.length)
		return false;

    else if(s1.length<=1)
		return true;
        
    var hm = {};
	for(var i=0;i<s1.length;i++){
		var ch1=s1.charAt(i);
		var ch2=s2.charAt(i);
		if(hm.hasOwnProperty(ch1)){
			if(hm[ch1]==ch2)
				continue;
			else
				return false;
		}else{
			if(hm[ch2] == ch2)
				return false;
			else
				hm[ch1]=ch2;
		}
	}
	return true;
  
 }


 const argv = process.argv
 console.log(one_to_one(argv[2],argv[3]))
