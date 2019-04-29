//------Audio Translations Reciters
var TransRectr = new Array();
var STransRectr=1;
TransRectr[1]={ "name" : "English", 
		"info" : "Sahih Inter.",
		"mode" : "verse",
		"audiodir" : "http://www.everyayah.com/data/English/Ibrahim_Walk_192kbps_TEST/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
TransRectr[2]={ "name" : "Urdu", 
		"info" : "Voice trans.",
		"mode" : "verse",
        "audiodir"  :  "http://1c.houseofquran.com/ur.khan_46kbs/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
TransRectr[3]={ "name": "French", 
		"info" :"Voice trans.",
		"mode" : "verse",
		"audiodir" : "http://1c.houseofquran.com/fr.leclerc_128kbs/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};

//-----------------------Reciters ----

var sRecitor=0;
function loadAudioConfig(sura)
{
	var config="";
	if(sura<10)
	{
		config+="00";
		config+=sura;
	}else if(sura<100)
	{
		config+="0";
		config+=sura;
	}else
	{
		config+=sura;
	}
	config+=".js";
	if(recitors[sRecitor].configmode=="file")
	{
		var furl=recitors[sRecitor].configdir+config;
		$.getScript(furl, function(){
			var naya=quranSura[sura][1];
			var se=get_first_seq(sura,1);
			var ee=get_last_seq(sura,naya);
			var j;
			for (j=se;j<=ee;++j)
			{
				recitors[sRecitor].wInfo[j]=WINFO[j];
			}
			recitors[sRecitor].cofigLoad[sura]=1;
		});	
	}
}
function getSurahIndex(ARR,elt)
{
   var len = ARR.length;
    var from = Number(arguments[2]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (ARR[from][0] == elt)
        return from;
    }
    return -1;
}
var recitors = new Array();
var selectedRecitor=0;
//-------------------------------------------------------------------------------------------//
recitors[0]={ "name": "Al Hussary", 
		"info" :"",
		"mode" : "verse",
		"audiodir" : "./Hussary/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[0].sura[0]=0;//all sura available
