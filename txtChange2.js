const c11 = new RegExp(/(.+)\((.+剣.、杖.)\)/);
const c12 = new RegExp(/  {\n    name: "$1",\n    ability: "$2",\n    skills: \[/);
const c21 = new RegExp(`^$`);
const c22 = new RegExp(/\]\n  },\n/);
const c31 = new RegExp(`^・(.+)`);
const c32 = new RegExp(`"$1",`);
const c41 = new RegExp(`^※(.+)`);
const c42 = new RegExp(`"※$1",`);

const input = document.getElementById(`in`);
const btn = document.getElementById(`text-change`);
const output = document.getElementById(`out`);
const copy = document.getElementById(`autoCopy`);
const out2 = document.getElementById(`out2`);

function cng(e) {
  const txt1 = input.value.split(`\n`);
  const txt2 = new Array(txt1.length);

  for (let i = 0; i < txt1.length; i++) {
    // "名前" { "ability": アビリティ,
    txt2[i] = txt1[i].replace(c11, c12);
    // 空行に},を追加
    txt2[i] = txt2[i].replace(c21, c22);
    // スキルを配列に変換
    txt2[i] = txt2[i].replace(c31, c32);
    // 注意点を配列に変換
    txt2[i] = txt2[i].replace(c41, c42);
  }
  return txt2.join("")
    .replaceAll(/\//g, "")
    .replaceAll(/\\([\[\]])/g, "$1")
    .replaceAll(/\\n/g, "\n");
}

function cng2(e) {
  if (input.value === ``) {
    return;
  }
  const t = [
    `const charaData = [`,
    `${cng(e)}];`,
  ].join("\n");
  output.value = t;
}

btn.addEventListener("click", cng2);








