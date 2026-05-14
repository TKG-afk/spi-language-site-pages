const questions = [
  {
    id: "j1",
    category: "熟語",
    title: "熟語の成り立ちを選びなさい",
    text: "「大小」の成り立ちとして最も適切なものはどれですか。",
    choices: ["反対の意味を持つ漢字の組み合わせ", "同じ意味を持つ漢字の組み合わせ", "上の字が下の字を修飾する組み合わせ", "主語と述語の関係"],
    answer: 0,
    explanation: "大と小は反対の意味を表す漢字です。SPIの熟語問題では、漢字同士の意味関係を短時間で判断します。"
  },
  {
    id: "j2",
    category: "熟語",
    title: "熟語の成り立ちを選びなさい",
    text: "「温暖」の成り立ちとして最も適切なものはどれですか。",
    choices: ["同じような意味を持つ漢字の組み合わせ", "反対の意味を持つ漢字の組み合わせ", "上の字が下の字を否定する組み合わせ", "下の字が上の字の目的語になる組み合わせ"],
    answer: 0,
    explanation: "温も暖も、あたたかいという近い意味を持ちます。同じ方向の意味を重ねて熟語を作っています。"
  },
  {
    id: "j3",
    category: "熟語",
    title: "熟語の成り立ちを選びなさい",
    text: "「読書」の成り立ちとして最も適切なものはどれですか。",
    choices: ["下の字が上の字の目的語になる組み合わせ", "反対の意味を持つ漢字の組み合わせ", "同じ意味を持つ漢字の組み合わせ", "主語と述語の関係"],
    answer: 0,
    explanation: "読書は「書を読む」と考えられます。下の漢字が動作の対象になる型です。"
  },
  {
    id: "j4",
    category: "熟語",
    title: "熟語の成り立ちを選びなさい",
    text: "「国立」の成り立ちとして最も適切なものはどれですか。",
    choices: ["上の字が下の字を修飾する組み合わせ", "反対の意味を持つ漢字の組み合わせ", "下の字が上の字を修飾する組み合わせ", "同じ意味を持つ漢字の組み合わせ"],
    answer: 0,
    explanation: "国立は「国が設立・運営する」という意味で、国が立を説明しています。上の字が下の字を修飾する型です。"
  },
  {
    id: "j5",
    category: "熟語",
    title: "熟語の成り立ちを選びなさい",
    text: "「日没」の成り立ちとして最も適切なものはどれですか。",
    choices: ["主語と述語の関係", "同じ意味を持つ漢字の組み合わせ", "反対の意味を持つ漢字の組み合わせ", "上の字が下の字を修飾する組み合わせ"],
    answer: 0,
    explanation: "日没は「日が没する」と考えられます。上の字が主語、下の字が述語のような関係です。"
  },
  {
    id: "j6",
    category: "熟語",
    title: "同じ成り立ちの熟語を選びなさい",
    text: "「売買」と同じ成り立ちの熟語はどれですか。",
    choices: ["勝敗", "清潔", "登山", "急行"],
    answer: 0,
    explanation: "売と買、勝と敗はどちらも反対の意味を持つ漢字の組み合わせです。"
  },
  {
    id: "j7",
    category: "熟語",
    title: "同じ成り立ちの熟語を選びなさい",
    text: "「保護」と同じ成り立ちの熟語はどれですか。",
    choices: ["救助", "上下", "着席", "山頂"],
    answer: 0,
    explanation: "保も護も、守るという近い意味を持ちます。救と助も助けるという近い意味の組み合わせです。"
  },
  {
    id: "j8",
    category: "熟語",
    title: "同じ成り立ちの熟語を選びなさい",
    text: "「登山」と同じ成り立ちの熟語はどれですか。",
    choices: ["入室", "寒暖", "増減", "柔軟"],
    answer: 0,
    explanation: "登山は「山に登る」、入室は「室に入る」と考えられます。下の字が動作の対象や方向を表します。"
  },
  {
    id: "j9",
    category: "熟語",
    title: "同じ成り立ちの熟語を選びなさい",
    text: "「海水」と同じ成り立ちの熟語はどれですか。",
    choices: ["校庭", "起伏", "加減", "読書"],
    answer: 0,
    explanation: "海水は「海の水」、校庭は「学校の庭」です。上の字が下の字を説明する型です。"
  },
  {
    id: "j10",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「迅速」の意味として最も近いものはどれですか。",
    choices: ["すばやいこと", "くわしいこと", "静かなこと", "正しいこと"],
    answer: 0,
    explanation: "迅速は、物事の進み方や対応が速いことを表します。"
  },
  {
    id: "j11",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「慎重」の意味として最も近いものはどれですか。",
    choices: ["注意深いこと", "楽しいこと", "新しいこと", "短いこと"],
    answer: 0,
    explanation: "慎重は、軽々しく判断せず、注意深く進めることです。"
  },
  {
    id: "j12",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「改善」の意味として最も近いものはどれですか。",
    choices: ["悪い点をよくすること", "同じ状態に戻すこと", "すぐに中止すること", "内容を隠すこと"],
    answer: 0,
    explanation: "改善は、問題点や悪い状態をよい方向へ変えることです。"
  },
  {
    id: "j13",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「妥当」の意味として最も近いものはどれですか。",
    choices: ["適切であること", "急いでいること", "不足していること", "反対していること"],
    answer: 0,
    explanation: "妥当は、状況や目的に合っていて適切であることを表します。"
  },
  {
    id: "j14",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「明瞭」の意味として最も近いものはどれですか。",
    choices: ["はっきりしていること", "とても古いこと", "わずかであること", "偶然であること"],
    answer: 0,
    explanation: "明瞭は、内容や状態がはっきりしていて分かりやすいことです。"
  },
  {
    id: "j15",
    category: "熟語",
    title: "熟語の意味として最も近いものを選びなさい",
    text: "「維持」の意味として最も近いものはどれですか。",
    choices: ["同じ状態を保つこと", "新しく作ること", "大きく広げること", "細かく分けること"],
    answer: 0,
    explanation: "維持は、今ある状態をそのまま保ち続けることです。"
  },
  {
    id: "l1",
    category: "長文",
    title: "本文の内容として正しいものを選びなさい",
    text: "新しい勉強を始めるとき、多くの人は最初から長時間取り組もうとする。しかし、慣れていない段階で負担を大きくすると、続けること自体が難しくなる。まずは短い時間でもよいので毎日触れることが、習慣化への近道である。\n\n本文の内容として最も適切なものはどれですか。",
    choices: ["短時間でも毎日続けることが習慣化につながる", "最初から長時間勉強するほど必ず続く", "勉強時間は長ければ長いほどよい", "慣れていない段階では勉強しないほうがよい"],
    answer: 0,
    explanation: "本文は、初心者は負担を大きくしすぎず、短時間でも継続することが重要だと述べています。"
  },
  {
    id: "l2",
    category: "長文",
    title: "本文の主旨として最も適切なものを選びなさい",
    text: "新しい勉強を始めるとき、多くの人は最初から長時間取り組もうとする。しかし、慣れていない段階で負担を大きくすると、続けること自体が難しくなる。まずは短い時間でもよいので毎日触れることが、習慣化への近道である。\n\n本文の主旨として最も適切なものはどれですか。",
    choices: ["学習を続けるには始めやすい量にすることが大切だ", "長時間の学習だけが成果を生む", "毎日同じ場所で勉強する必要がある", "習慣化には特別な教材が必要だ"],
    answer: 0,
    explanation: "文章全体は、無理のない量から始めて継続しやすくすることを主張しています。"
  },
  {
    id: "l3",
    category: "長文",
    title: "本文の内容として正しいものを選びなさい",
    text: "会議で意見を出すときは、結論を先に述べると伝わりやすい。理由や具体例を先に長く話すと、聞き手は何について判断すればよいのか分かりにくくなる。短い結論の後に根拠を補えば、議論の時間を有効に使える。\n\n本文の内容として最も適切なものはどれですか。",
    choices: ["結論を先に述べると意見が伝わりやすい", "具体例は一切話さないほうがよい", "理由を先に長く話すほど聞き手は理解しやすい", "会議では発言を避けるべきである"],
    answer: 0,
    explanation: "本文は、結論を先に示し、その後に根拠を述べると分かりやすいと説明しています。"
  },
  {
    id: "l4",
    category: "長文",
    title: "本文から読み取れることを選びなさい",
    text: "会議で意見を出すときは、結論を先に述べると伝わりやすい。理由や具体例を先に長く話すと、聞き手は何について判断すればよいのか分かりにくくなる。短い結論の後に根拠を補えば、議論の時間を有効に使える。\n\n本文から読み取れることとして最も適切なものはどれですか。",
    choices: ["聞き手が判断しやすい順序で話すことが大切だ", "会議では根拠を示してはいけない", "結論は最後まで隠すべきだ", "具体例があると必ず混乱する"],
    answer: 0,
    explanation: "結論を先にし、根拠を後で補うという順序が、聞き手の判断を助けると読み取れます。"
  },
  {
    id: "l5",
    category: "長文",
    title: "本文の内容として正しいものを選びなさい",
    text: "情報を集めるとき、検索結果の上位にある記事だけを見て判断するのは危険である。複数の資料を比べ、発信元や更新日を確認することで、情報の信頼性を判断しやすくなる。早く結論を出すことより、根拠を確かめる姿勢が重要である。\n\n本文の内容として最も適切なものはどれですか。",
    choices: ["情報は複数の資料や発信元を確認して判断する", "検索結果の一番上だけを信じればよい", "更新日は情報の信頼性に関係しない", "根拠を確かめるより早く結論を出すべきだ"],
    answer: 0,
    explanation: "本文は、複数資料・発信元・更新日の確認によって信頼性を判断することを重視しています。"
  },
  {
    id: "l6",
    category: "長文",
    title: "本文の主旨として最も適切なものを選びなさい",
    text: "情報を集めるとき、検索結果の上位にある記事だけを見て判断するのは危険である。複数の資料を比べ、発信元や更新日を確認することで、情報の信頼性を判断しやすくなる。早く結論を出すことより、根拠を確かめる姿勢が重要である。\n\n本文の主旨として最も適切なものはどれですか。",
    choices: ["情報の信頼性を確かめてから判断するべきだ", "検索では上位の記事だけを読むべきだ", "資料は少ないほど正確である", "発信元を確認すると判断ができなくなる"],
    answer: 0,
    explanation: "文章全体は、情報の根拠を確認してから判断する姿勢の重要性を述べています。"
  },
  {
    id: "l7",
    category: "長文",
    title: "本文の内容として正しいものを選びなさい",
    text: "仕事の優先順位を決めるときは、締切だけでなく影響の大きさも考える必要がある。締切が近い作業でも、他の人の作業を止めないものなら後回しにできる場合がある。一方で、自分の遅れがチーム全体に影響する作業は早めに進めるべきである。\n\n本文の内容として最も適切なものはどれですか。",
    choices: ["優先順位は締切と影響の大きさを考えて決める", "締切だけを見れば十分である", "チームへの影響は考えなくてよい", "自分の作業はすべて後回しにするべきだ"],
    answer: 0,
    explanation: "本文では、締切とチームへの影響の両方を考えることが重要だと述べています。"
  },
  {
    id: "l8",
    category: "長文",
    title: "本文から読み取れることを選びなさい",
    text: "仕事の優先順位を決めるときは、締切だけでなく影響の大きさも考える必要がある。締切が近い作業でも、他の人の作業を止めないものなら後回しにできる場合がある。一方で、自分の遅れがチーム全体に影響する作業は早めに進めるべきである。\n\n本文から読み取れることとして最も適切なものはどれですか。",
    choices: ["他者に影響する作業は早めに進める必要がある", "締切が近い作業は必ず最優先である", "チーム作業では自分の遅れは問題にならない", "優先順位は気分で決めるべきである"],
    answer: 0,
    explanation: "チーム全体に影響する作業は早めに進めるべきだと本文にあります。"
  },
  {
    id: "l9",
    category: "長文",
    title: "本文の内容として正しいものを選びなさい",
    text: "文章を読むとき、すべての語句を同じ重さで追うと時間が足りなくなる。まず筆者が何を主張しているかを押さえ、例や補足は主張を支える材料として読むとよい。大切なのは、細部を暗記することではなく、話の中心を見失わないことである。\n\n本文の内容として最も適切なものはどれですか。",
    choices: ["筆者の主張を押さえて読むことが大切だ", "細部をすべて暗記することが最も大切だ", "例や補足は必ず主張と無関係である", "文章は最後の一文だけ読めばよい"],
    answer: 0,
    explanation: "本文は、筆者の主張を中心に読み、例や補足を材料として扱うことをすすめています。"
  },
  {
    id: "l10",
    category: "長文",
    title: "本文の主旨として最も適切なものを選びなさい",
    text: "文章を読むとき、すべての語句を同じ重さで追うと時間が足りなくなる。まず筆者が何を主張しているかを押さえ、例や補足は主張を支える材料として読むとよい。大切なのは、細部を暗記することではなく、話の中心を見失わないことである。\n\n本文の主旨として最も適切なものはどれですか。",
    choices: ["文章読解では中心となる主張を見つけることが重要だ", "文章読解では例だけを読めばよい", "文章の細部はすべて同じ重要度である", "時間を気にせず一語ずつ読むべきだ"],
    answer: 0,
    explanation: "文章全体は、読解では主張を中心に読むべきだという内容でまとまっています。"
  },
  {
    id: "b1",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "説明が分かりにくいときは、具体例を加えると内容が（　）になる。",
    choices: ["明確", "余分", "不規則", "偶然"],
    answer: 0,
    explanation: "具体例を加えることで内容がはっきりするため、「明確」が自然です。"
  },
  {
    id: "b2",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "資料を作る前に目的を確認しておくと、必要な情報を（　）しやすい。",
    choices: ["選別", "放置", "混乱", "否定"],
    answer: 0,
    explanation: "目的が分かると必要な情報を選び分けられるため、「選別」が適切です。"
  },
  {
    id: "b3",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "新しい案を出すだけでなく、実行できるかどうかを（　）する必要がある。",
    choices: ["検討", "沈黙", "装飾", "休憩"],
    answer: 0,
    explanation: "実行可能性を考える文脈なので、「検討」が入ります。"
  },
  {
    id: "b4",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "作業の手順を共有しておけば、担当者が変わっても品質を（　）できる。",
    choices: ["維持", "破棄", "誤解", "短縮"],
    answer: 0,
    explanation: "同じ品質を保つという意味なので、「維持」が適切です。"
  },
  {
    id: "b5",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "相手の意見と違う場合でも、まず理由を聞く姿勢が（　）である。",
    choices: ["重要", "不要", "偶発", "過去"],
    answer: 0,
    explanation: "相手の理由を聞く姿勢が大切だという文脈なので、「重要」が合います。"
  },
  {
    id: "b6",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "短い時間で正確に読むには、文章の中心を（　）ことが必要だ。",
    choices: ["把握する", "隠す", "増やす", "飾る"],
    answer: 0,
    explanation: "文章の中心をつかむという意味で、「把握する」が自然です。"
  },
  {
    id: "b7",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "同じ失敗を繰り返さないために、原因を（　）して次の行動を決める。",
    choices: ["分析", "保存", "拡大", "延期"],
    answer: 0,
    explanation: "原因を詳しく調べる文脈なので、「分析」が適切です。"
  },
  {
    id: "b8",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "急いでいるときほど、確認を省くとミスが（　）しやすい。",
    choices: ["発生", "完成", "解決", "減少"],
    answer: 0,
    explanation: "確認を省くとミスが起こりやすいので、「発生」が入ります。"
  },
  {
    id: "b9",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "相手に依頼するときは、期限と目的を伝えると（　）が少ない。",
    choices: ["誤解", "成果", "利益", "資料"],
    answer: 0,
    explanation: "期限と目的を伝えることで勘違いが減るため、「誤解」が合います。"
  },
  {
    id: "b10",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "複数の案を比べることで、それぞれの長所と短所が（　）になる。",
    choices: ["明らか", "同一", "不要", "偶然"],
    answer: 0,
    explanation: "比較によって特徴がはっきりするため、「明らか」が適切です。"
  },
  {
    id: "b11",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "課題が大きい場合は、小さな作業に分けると進め方を（　）しやすい。",
    choices: ["整理", "否定", "停止", "省略"],
    answer: 0,
    explanation: "作業を分けることで進め方を整えやすくなるため、「整理」が自然です。"
  },
  {
    id: "b12",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "結論だけでなく理由も示すことで、主張に（　）が生まれる。",
    choices: ["説得力", "偶然性", "沈黙", "距離"],
    answer: 0,
    explanation: "理由を示すと相手が納得しやすくなるため、「説得力」が適切です。"
  },
  {
    id: "b13",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "初めて取り組む問題では、選択肢を一つずつ（　）して考えるとよい。",
    choices: ["確認", "放置", "装飾", "混合"],
    answer: 0,
    explanation: "選択肢を一つずつ確かめるという意味で、「確認」が合います。"
  },
  {
    id: "b14",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "目標が高すぎると続かないことがあるため、最初は（　）な計画を立てる。",
    choices: ["現実的", "無関係", "過剰", "偶然"],
    answer: 0,
    explanation: "続けやすい計画にする文脈なので、「現実的」が適切です。"
  },
  {
    id: "b15",
    category: "空欄補充",
    title: "空欄に入る語句を選びなさい",
    text: "復習では、正解した問題よりも間違えた問題の理由を（　）することが大切だ。",
    choices: ["理解", "装備", "移動", "保存"],
    answer: 0,
    explanation: "間違えた理由を分かるようにする文脈なので、「理解」が入ります。"
  }
];

const state = {
  current: 0,
  answers: {},
  startedAt: Date.now(),
  timerId: null
};

const app = document.querySelector("#app");
const EXAM_SECONDS = 15 * 60;
const WARNING_SECONDS = 5 * 60;

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function route() {
  clearInterval(state.timerId);
  const hash = window.location.hash || "#exam";
  if (hash.startsWith("#result")) renderResult();
  else if (hash.startsWith("#review")) renderReview();
  else renderExam();
}

function renderExam() {
  app.replaceChildren(cloneTemplate("#exam-template"));
  state.startedAt = state.startedAt || Date.now();
  bindExam();
  paintQuestion();
  state.timerId = setInterval(updateTimer, 1000);
  updateTimer();
}

function bindExam() {
  app.querySelector("[data-next]").addEventListener("click", goNext);
  app.querySelector("[data-prev]").addEventListener("click", goPrev);
  app.querySelector("[data-reset]").addEventListener("click", resetExam);
  app.querySelector("[data-choice-form]").addEventListener("change", (event) => {
    if (event.target.name === "choice") {
      state.answers[questions[state.current].id] = Number(event.target.value);
    }
  });
}

function paintQuestion() {
  const question = questions[state.current];
  app.querySelector("[data-current-question]").textContent = String(state.current + 1);
  app.querySelector("[data-progress-text]").textContent = `${state.current + 1} / ${questions.length}`;
  app.querySelector("[data-progress-bar]").style.width = `${((state.current + 1) / questions.length) * 100}%`;
  app.querySelector("[data-question-category]").textContent = question.category;
  app.querySelector("[data-question-title]").textContent = question.title;
  app.querySelector("[data-question-text]").textContent = question.text;

  const form = app.querySelector("[data-choice-form]");
  form.replaceChildren();
  question.choices.forEach((choice, index) => {
    const id = `${question.id}-${index}`;
    const label = document.createElement("label");
    label.className = "choice";
    label.htmlFor = id;
    label.innerHTML = `
      <input id="${id}" type="radio" name="choice" value="${index}">
      <span>
        <span class="choice-meta">${String.fromCharCode(65 + index)}</span>
        <span class="choice-text">${choice}</span>
      </span>
    `;
    form.append(label);
  });

  const selected = state.answers[question.id];
  if (selected !== undefined) {
    form.querySelector(`input[value="${selected}"]`).checked = true;
  }

  app.querySelector("[data-prev]").disabled = state.current === 0;
  app.querySelector("[data-next]").textContent =
    state.current === questions.length - 1 ? "回答して終了する" : "次へ進む";
}

function goNext() {
  if (state.current >= questions.length - 1) {
    window.location.hash = "#result";
    return;
  }
  state.current += 1;
  paintQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goPrev() {
  if (state.current === 0) return;
  state.current -= 1;
  paintQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetExam() {
  state.current = 0;
  state.answers = {};
  state.startedAt = Date.now();
  window.location.hash = "#exam";
  if (app.querySelector("[data-choice-form]")) {
    paintQuestion();
    updateTimer();
  }
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const left = EXAM_SECONDS - elapsed;
  const absLeft = Math.max(0, left);
  const minutes = String(Math.floor(absLeft / 60)).padStart(2, "0");
  const seconds = String(absLeft % 60).padStart(2, "0");
  const timer = app.querySelector(".floating-timer");
  const timeTarget = app.querySelector("[data-time-left]");
  const statusTarget = app.querySelector("[data-time-status]");

  if (!timer || !timeTarget || !statusTarget) return;

  timeTarget.textContent = `${minutes}:${seconds}`;
  if (left <= 0) {
    timer.dataset.timerState = "over";
    statusTarget.textContent = "終了してください";
  } else if (left <= WARNING_SECONDS) {
    timer.dataset.timerState = "warning";
    statusTarget.textContent = "残り5分以内";
  } else {
    timer.dataset.timerState = "safe";
    statusTarget.textContent = "";
  }
}

function getScore() {
  const correct = questions.filter((question) => state.answers[question.id] === question.answer).length;
  return {
    correct,
    total: questions.length,
    percent: Math.round((correct / questions.length) * 100)
  };
}

function renderResult() {
  app.replaceChildren(cloneTemplate("#result-template"));
  const score = getScore();
  const meter = app.querySelector(".score-meter");
  meter.style.setProperty("--score-deg", `${score.percent * 3.6}deg`);
  app.querySelector("[data-score-percent]").textContent = `${score.percent}%`;
  app.querySelector("[data-result-message]").textContent = `${score.correct} / ${score.total}問正解。${resultMessage(score.percent)}`;

  const list = app.querySelector("[data-result-list]");
  questions.forEach((question, index) => {
    const selected = state.answers[question.id];
    const isCorrect = selected === question.answer;
    const row = document.createElement("article");
    row.className = "result-row";
    row.innerHTML = `
      <span class="result-badge ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "正解" : "復習"}</span>
      <div>
        <h3>問${index + 1} ${question.title}</h3>
        <p>${question.category} / あなたの回答: ${selectedText(question, selected)}</p>
      </div>
      <a class="primary-link" href="#review-${question.id}">解説</a>
    `;
    list.append(row);
  });

  app.querySelector("[data-review-all]").addEventListener("click", () => {
    window.location.hash = "#review";
  });
  app.querySelector("[data-retry]").addEventListener("click", resetExam);
}

function resultMessage(percent) {
  if (percent >= 80) return "初心者向け範囲はかなり安定しています。長文は根拠の位置を確認しながら次の難度へ進みましょう。";
  if (percent >= 60) return "基礎はつかめています。熟語の成り立ちと空欄補充の文脈判断を復習すると伸びやすいです。";
  return "まずは頻出形式に慣れる段階です。解説で正解の根拠を確認し、同じ型を解き直しましょう。";
}

function renderReview() {
  app.replaceChildren(cloneTemplate("#review-template"));
  const list = app.querySelector("[data-review-list]");
  questions.forEach((question, index) => {
    const selected = state.answers[question.id];
    const isCorrect = selected === question.answer;
    const card = document.createElement("article");
    card.className = "review-card";
    card.id = `review-${question.id}`;
    card.innerHTML = `
      <div class="review-meta">
        <span>問${index + 1}</span>
        <span>${question.category}</span>
        <span class="${isCorrect ? "correct-text" : "wrong-text"}">${isCorrect ? "正解" : "要復習"}</span>
      </div>
      <h2>${question.title}</h2>
      <p class="question-text">${question.text}</p>
      <div class="answer-block">
        <div class="answer-box">
          <span class="answer-label">あなたの回答</span>
          <p>${selectedText(question, selected)}</p>
        </div>
        <div class="answer-box">
          <span class="answer-label">正解</span>
          <p class="correct-text">${question.choices[question.answer]}</p>
        </div>
        <div class="answer-box">
          <span class="answer-label">解説</span>
          <p>${question.explanation}</p>
        </div>
      </div>
    `;
    list.append(card);
  });

  const targetId = window.location.hash.replace("#", "");
  if (targetId.startsWith("review-")) {
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function selectedText(question, selected) {
  return selected === undefined ? "未回答" : question.choices[selected];
}

window.addEventListener("hashchange", route);
route();
