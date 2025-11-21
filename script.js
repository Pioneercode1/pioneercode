
// --- CONFIGURATION ---
const STORAGE_KEY = 'cody_user_code';
const DEFAULT_CODE = `<h1>Hello, Cody!</h1>
<p>This is a live preview.</p>

<style>
  body { 
    font-family: sans-serif; 
    padding: 20px; 
    background: #fff; /* Ensure white background */
  }
  h1 { color: #6B46C1; }
  .box {
    padding: 15px;
    background: #f0f0f5;
    border-left: 4px solid #6B46C1;
    margin-top: 20px;
  }
</style>

<div class="box">
  Check the Console tab!
</div>

<script>
  console.log("System Initialized...");
  
  let seconds = 0;
  setInterval(() => {
    seconds++;
    console.log("Timer running: " + seconds + "s");
  }, 2000);
<\/script>`;

// --- DOM ELEMENTS ---
const editor = document.getElementById('codeEditor');
const gutter = document.getElementById('lineNumbers');
const previewFrame = document.getElementById('previewFrame');
const consoleOutput = document.getElementById('consoleOutput');
const runBtn = document.getElementById('runBtn');

// --- 1. EDITOR LOGIC ---

function initEditor() {
    const saved = localStorage.getItem(STORAGE_KEY);
    editor.value = saved ? saved : DEFAULT_CODE;
    updateLineNumbers();
    runCode();
}

const updateLineNumbers = () => {
    const lines = editor.value.split('\n').length;
    gutter.innerHTML = Array(lines).fill(0).map((_, i) => i + 1).join('<br>');
};

// Sync Scrolling
editor.addEventListener('scroll', () => { gutter.scrollTop = editor.scrollTop; });

// Tab & Auto-Close Logic
editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + "  " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 2;
    }
    // Simple auto-close
    const pairs = { '(': ')', '{': '}', '[': ']', '<': '>' };
    if (pairs[e.key]) {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + e.key + pairs[e.key] + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 1;
    }
});

// Save & Update Lines
editor.addEventListener('input', () => {
    updateLineNumbers();
    localStorage.setItem(STORAGE_KEY, editor.value);
});

// --- 2. RUNTIME & CONSOLE ---

function runCode() {
    const code = editor.value;

    // Clear Console UI
    consoleOutput.innerHTML = '<div class="log-entry" style="color:#888">// Console Ready</div>';

    // Interceptor Script: Captures console logs from Iframe and sends to parent
    const consoleInterceptor = `
                <script>
                    const originalLog = console.log;
                    const originalError = console.error;
                    function sendToParent(type, args) {
                        const message = Array.from(args).map(arg => {
                            if(typeof arg === 'object') return JSON.stringify(arg);
                            return String(arg);
                        }).join(' ');
                        window.parent.postMessage({ source: 'cody-frame', type: type, message: message }, '*');
                    }
                    console.log = (...args) => { originalLog(...args); sendToParent('log', args); };
                    console.error = (...args) => { originalError(...args); sendToParent('error', args); };
                    window.onerror = function(msg, src, line) { sendToParent('error', [msg + ' (Line ' + line + ')']); };
                <\/script>
            `;

    const frameDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(consoleInterceptor + code);
    frameDoc.close();

    // Button Feedback
    const originalText = runBtn.innerHTML;
    runBtn.innerHTML = '<i class="fa-solid fa-check"></i> Running';
    setTimeout(() => runBtn.innerHTML = originalText, 1000);
}

// Receive Console Messages
window.addEventListener('message', (event) => {
    if (event.data && event.data.source === 'cody-frame') {
        const { type, message } = event.data;
        const entry = document.createElement('div');
        entry.className = `log-entry ${type}`;
        const time = new Date().toLocaleTimeString().split(' ')[0];
        entry.innerText = `[${time}] ${message}`;
        consoleOutput.appendChild(entry);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
});

// --- 3. TABS ---
function switchOutputTab(tabName) {
    document.querySelectorAll('.out-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.output-view').forEach(v => v.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    document.getElementById(`view-${tabName}`).classList.add('active');
}

// --- SCROLLING ---
function scrollToLearning() {
    document.getElementById('learning-platform').scrollIntoView({ behavior: 'smooth' });
}

// --- SIDEBAR ---
const lessons = document.querySelectorAll('.lesson-item');
lessons.forEach(lesson => {
    lesson.addEventListener('click', function () {
        lessons.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Start
window.onload = initEditor;
