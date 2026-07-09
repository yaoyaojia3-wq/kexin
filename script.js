const skillData = {
  hil: [
    '根据BMS需求提取测试点，设计正常、边界、异常、故障注入和版本回归测试场景。',
    '熟悉高压上下电、休眠唤醒、充电状态、热管理、热失控预警、SOH等BMS功能验证。',
    '能够基于VeriStand/HIL台架进行静态信号配置、故障模拟和闭环验证。',
    '关注继电器时序、BMS状态跳转、故障上报、保护动作和异常恢复链路。'
  ],
  tools: [
    'CANoe：采集CAN Trace、监控和发送报文，结合DBC解析BMS关键状态信号。',
    'CANape/XCP：进行在线测量、标定观察、实时信号采集和测试数据记录。',
    'MATLAB/Simulink：配合搭建或维护仿真模型，处理测试数据，支持结果闭环分析。',
    '缺陷平台：提交Bug、补充复现步骤、跟踪修复版本并输出测试报告。'
  ],
  diag: [
    '了解ISO 14229 UDS常用服务，可支持DTC读取、清除、状态核对和诊断结果记录。',
    '能够围绕CC/CP、CC2、充电使能、连接状态和直流充电流程开展HIL验证。',
    '熟悉CAN报文周期、信号值、状态位、故障等级和报警逻辑的基础分析方法。',
    '能够结合CAN数据、台架输入、测试日志和缺陷记录推动问题定位。'
  ],
  soft: [
    '具备CET-4，能够阅读英文技术资料；持有C1驾照，具备实车测试基础。',
    '熟悉Linux基础命令和常用办公文档，能够整理测试记录、问题清单和阶段报告。',
    '会使用ChatGPT、DeepSeek等AI工具辅助梳理测试逻辑、搭建知识库和提升文档效率。',
    '沟通耐心，适应版本集中回归节奏，能配合项目节点推进问题闭环。'
  ]
};

const metricText = {
  cases: '覆盖星海X5、星海S7项目的BMS功能、故障和热管理相关验证。',
  bugs: '围绕故障诊断、报文状态、热管理和上下电等问题跟踪修复与回归。',
  projects: '项目主线集中在新能源BMS HIL验证，强调台架仿真和缺陷闭环。'
};

function renderSkills(key) {
  const container = document.querySelector('#skillContent');
  container.innerHTML = `<ul class="skill-list">${skillData[key].map(item => `<li>${item}</li>`).join('')}</ul>`;
}
renderSkills('hil');

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderSkills(button.dataset.tab);
  });
});

document.querySelectorAll('.metric').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.metric').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('#metricText').textContent = metricText[button.dataset.metric];
  });
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', selected !== 'all' && card.dataset.project !== selected);
    });
  });
});

const note = document.querySelector('#copyNote');
function copyValue(value) {
  navigator.clipboard.writeText(value).then(() => {
    note.textContent = `已复制：${value}`;
    setTimeout(() => note.textContent = '点击号码或邮箱可复制。', 1800);
  }).catch(() => {
    note.textContent = '当前浏览器不支持自动复制，可手动选择文本。';
  });
}

document.querySelector('#copyPhone').addEventListener('click', () => copyValue('18174239652'));
document.querySelectorAll('.inline-copy').forEach(button => {
  button.addEventListener('click', () => copyValue(button.dataset.copy));
});
document.querySelector('#themeToggle').addEventListener('click', () => document.body.classList.toggle('dark'));

const backTop = document.querySelector('#backTop');
window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500));
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
