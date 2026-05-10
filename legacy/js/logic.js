// ============ 状态管理 & 评分逻辑 ============
var S={page:"welcome",currentQuestion:0,answers:{},scores:{worldview:0,creation:0,aesthetic:0,expression:0}};

function recordAnswer(qid,choice){
  S.answers[qid]=choice;
  var q=Q.find(function(x){return x.id===qid});
  S.scores[q.dim]+=(choice==="A"?1:-1);
}

function getDimResult(dimId){
  var s=S.scores[dimId];
  var d=D.find(function(x){return x.id===dimId});
  return s>=0?{code:d.left.code,label:d.left.label,emoji:d.left.emoji}:{code:d.right.code,label:d.right.label,emoji:d.right.emoji};
}

function getTypeCode(){
  return D.map(function(d){return getDimResult(d.id).code}).join("");
}

function getMatch(){
  return L[getTypeCode()]||L["RGDN"];
}

function getDimScores(){
  return D.map(function(d){
    var s=S.scores[d.id];
    var r=getDimResult(d.id);
    return{name:d.name,left:d.left,right:d.right,score:s,label:r.label,emoji:r.emoji};
  });
}

// ============ 欢迎页 ============
function renderWelcome(){
  document.getElementById("app").innerHTML=
    '<h1 class="welcome-title">寻隐者</h1>'+
    '<p class="welcome-subtitle">SOUL LITERATI \u00b7 灵魂文学家匹配测试</p>'+
    '<div class="quote-divider"></div>'+
    '<p class="welcome-desc">'+
      '在文学的星空中，<span>每一位伟大的作家都是一颗独特的星球</span>。<br>'+
      '有些炽烈如太阳，有些清冷如月亮，有些深邃如黑洞。<br><br>'+
      '通过 <span>12 道灵魂拷问</span>，我们将为你在这片星空中，<br>'+
      '找到那颗<span>与你共振频率最相近的文学之星</span>。'+
    '</p>'+
    '<button class="btn-start" onclick="startQuiz()">开始寻隐</button>'+
    '<p class="welcome-footer">约需 3-5 分钟 · 共 12 题</p>';
}

// ============ 答题页 ============
function startQuiz(){
  S.page="quiz";S.currentQuestion=0;S.answers={};
  S.scores={worldview:0,creation:0,aesthetic:0,expression:0};
  renderQuiz();
}

function renderQuiz(){
  var q=Q[S.currentQuestion];
  var p=(S.currentQuestion/Q.length)*100;
  document.getElementById("app").innerHTML=
    '<div class="quiz-header fade-in">'+
      '<span class="quiz-counter">第 '+q.id+' / '+Q.length+' 题</span>'+
      '<div class="progress-bar"><div class="progress-fill" style="width:'+p+'%"></div></div>'+
    '</div>'+
    '<div class="quiz-question fade-in">'+q.text+'</div>'+
    '<div class="quiz-options fade-in">'+
      '<button class="option-btn" onclick="handleAnswer('+q.id+',\'A\')"><span class="emoji">'+q.emojiA+'</span><span class="text">'+q.optA+'</span></button>'+
      '<button class="option-btn" onclick="handleAnswer('+q.id+',\'B\')"><span class="emoji">'+q.emojiB+'</span><span class="text">'+q.optB+'</span></button>'+
    '</div>';
}

function handleAnswer(qid,choice){
  recordAnswer(qid,choice);
  if(S.currentQuestion<Q.length-1){S.currentQuestion++;setTimeout(renderQuiz,180);}
  else{S.page="result";setTimeout(renderResult,450);}
}

// ============ 结果页 ============
function renderResult(){
  var m=getMatch();
  var ds=getDimScores();

  // 维度图
  var dhtml="";
  for(var i=0;i<ds.length;i++){
    var d=ds[i];
    var a=Math.abs(d.score);
    var ip=d.score>=0?(50-a*16.7):(50+a*16.7);
    var lw=d.score>=0?Math.max(a*33.3,2):0;
    var rw=d.score<0?Math.max(a*33.3,2):0;
    dhtml+='<div class="dim-item">'+
      '<div class="dim-label">'+d.left.emoji+' '+d.left.label+'</div>'+
      '<div class="dim-bar-wrap">'+
        '<div class="dim-bar left" style="width:'+lw+'%"></div>'+
        '<div class="dim-indicator" style="left:'+ip+'%"></div>'+
      '</div>'+
      '<div class="dim-label-right">'+d.right.label+' '+d.right.emoji+'</div>'+
    '</div>';
  }

  // 关键词标签
  var ks=m.keywords.split("\u00b7");
  var khtml="";
  for(var j=0;j<ks.length;j++){
    khtml+='<span class="keyword-tag">'+ks[j].trim()+'</span>';
  }

  document.getElementById("app").innerHTML=
    '<div class="result-header fade-in">'+
      '<div class="result-badge">YOUR SOUL MATCH</div>'+
      '<div class="result-portrait">'+m.portrait+'</div>'+
      '<div class="result-name">'+m.name+'</div>'+
      '<div class="result-title">'+m.title+'</div>'+
      '<div class="result-era">'+m.era+'</div>'+
    '</div>'+
    '<div class="result-quote fade-in">\u300c'+m.quote+'\u300d</div>'+
    '<div class="result-works fade-in">\ud83d\udcd6 代表作：'+m.works+'</div>'+
    '<div class="result-keywords fade-in">'+khtml+'</div>'+
    '<div class="dimensions-analysis fade-in">'+
      '<div class="dimensions-title">\ud83e\uddec 你的文学灵魂维度</div>'+
      dhtml+
    '</div>'+
    '<div class="match-reason fade-in">'+
      '<div class="match-reason-title">\ud83d\udcab 为什么是 '+m.name+'？</div>'+
      '<div class="match-reason-text">'+m.matchReason+'</div>'+
    '</div>'+
    '<div class="result-actions fade-in">'+
      '<button class="btn-retry" onclick="startQuiz()">\ud83d\udd04 再做一次</button>'+
      '<button class="btn-share" onclick="shareResult()">\ud83d\udce4 分享结果</button>'+
    '</div>';
}

// ============ 分享 ============
function shareResult(){
  var m=getMatch();
  var c=getTypeCode();
  var t='我在「寻隐者」文学灵魂测试中匹配到了 '+m.name+'（'+m.title+'）！\n"'+m.quote+'"\n我的灵魂类型码：'+c+'\n来测测你的文学之魂 \ud83d\udc49';
  if(navigator.share){
    navigator.share({title:'寻隐者 \u00b7 灵魂文学家匹配',text:t});
  }else if(navigator.clipboard){
    navigator.clipboard.writeText(t).then(function(){alert('结果已复制到剪贴板，粘贴分享给朋友吧 \u2728');});
  }else{
    alert(t);
  }
}

// ============ 启动 ============
renderWelcome();
