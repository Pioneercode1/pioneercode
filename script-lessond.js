
// بيانات الدروس
const lessonsData = {
    html_intro: {
        title: "مقدمة في HTML: الهيكل الأساسي",
        track: "Web Development",
        type: "web",
        content: `
                    <p class="mb-4 text-gray-300">
                        مرحباً بك في أول خطوة لبناء الويب! لغة HTML هي الهيكل العظمي لأي صفحة إنترنت.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-lg border-r-4 border-blue-500 mb-4">
                        <h3 class="font-bold text-white mb-2">المهمة المطلوبة:</h3>
                        <p class="text-sm text-gray-300">
                            قم بتغيير النص داخل وسم <code>&lt;h1&gt;</code> ليكون "مرحباً كودي" بدلاً من النص الحالي، ثم اضغط على زر تشغيل لترى النتيجة الحية!
                        </p>
                    </div>
                `,
        code: `<!DOCTYPE html>
<html>
<body style="background-color: #f0f9ff; font-family: sans-serif; text-align: center; padding: 50px;">

    <h1 style="color: #0369a1;">العنوان القديم</h1>
    <p style="color: #475569;">هذه فقرة تجريبية، حاول تعديل الكود!</p>
    
</body>
</html>`
    },
    css_colors: {
        title: "الألوان والتنسيق في CSS",
        track: "Web Development",
        type: "web",
        content: `
                    <p class="mb-4 text-gray-300">
                        لغة CSS هي ما يعطي الحياة للألوان والتصاميم. يمكننا كتابة CSS داخل وسم <code>style</code>.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-lg border-r-4 border-purple-500 mb-4">
                        <h3 class="font-bold text-white mb-2">المهمة المطلوبة:</h3>
                        <p class="text-sm text-gray-300">
                            قم بتغيير لون الزر (background-color) من الرمادي <code>#64748b</code> إلى اللون الأرجواني <code>#7c3aed</code>.
                        </p>
                    </div>
                `,
        code: `<!DOCTYPE html>
<html>
<body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc;">

    <button style="
        background-color: #64748b; 
        color: white; 
        padding: 15px 30px; 
        border: none; 
        border-radius: 8px; 
        font-size: 20px; 
        cursor: pointer;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    ">
        اضغط هنا
    </button>

</body>
</html>`
    },
    js_interaction: {
        title: "التفاعل باستخدام JavaScript",
        track: "Web Development",
        type: "web",
        content: `
                    <p class="mb-4 text-gray-300">
                        الآن لنجعل الصفحة تتفاعل! سنستخدم دالة بسيطة لإظهار رسالة عند الضغط على زر.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-lg border-r-4 border-yellow-500 mb-4">
                        <h3 class="font-bold text-white mb-2">تحدي الجافاسكربت:</h3>
                        <p class="text-sm text-gray-300">
                            داخل دالة <code>showMessage()</code>، قم بتغيير النص داخل <code>alert</code> ليكون "تم النقر بنجاح!".
                        </p>
                    </div>
                `,
        code: `<!DOCTYPE html>
<html>
<body>

    <button onclick="showMessage()" style="padding: 10px 20px; font-size: 18px; cursor: pointer;">
        جرب النقر عليّ
    </button>

    <script>
        function showMessage() {
            // قم بتعديل الرسالة أدناه
            alert("رسالة قديمة...");
        }
    <\/script>

</body>
</html>`
    },
    python_print: {
        title: "أول برنامج بايثون: الطباعة",
        track: "Python Desktop",
        type: "terminal",
        content: `
                    <p class="mb-4 text-gray-300">
                        في بايثون، نستخدم دالة <code>print()</code> لعرض النصوص للمستخدم. إنها أبسط طريقة للتواصل مع البرنامج.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-lg border-r-4 border-green-500 mb-4">
                        <h3 class="font-bold text-white mb-2">مهمة بايثون:</h3>
                        <p class="text-sm text-gray-300">
                            اكتب كود يقوم بطباعة اسمك ومعه كلمة ترحيب، مثلاً: <code>print("Hello Kodi")</code>
                        </p>
                    </div>
                `,
        code: `# اكتب كود بايثون هنا
print("مرحباً، هذا أول سطر كود لي!")
`
    },
    python_loops: {
        title: "الحلقات التكرارية (Loops)",
        track: "Python Desktop",
        type: "terminal",
        content: `
                    <p class="mb-4 text-gray-300">
                        الحلقات (Loops) تسمح لنا بتكرار أمر معين عدة مرات دون إعادة كتابته. حلقة <code>for</code> هي الأشهر.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-lg border-r-4 border-green-500 mb-4">
                        <h3 class="font-bold text-white mb-2">التحدي:</h3>
                        <p class="text-sm text-gray-300">
                            استخدم الحلقة لطباعة الأرقام من 0 إلى 4. الكود موجود، فقط قم بتشغيله وتجربته!
                        </p>
                    </div>
                `,
        code: `# طباعة الأرقام باستخدام حلقة for
for i in range(5):
    print(f"الرقم الحالي هو: {i}")
`
    }
};

// متغيرات الحالة
let currentLessonId = 'html_intro';
const lessonKeys = Object.keys(lessonsData);

// عناصر DOM
const titleEl = document.getElementById('lesson-title');
const descEl = document.getElementById('lesson-desc');
const codeArea = document.getElementById('code-area');
const previewFrame = document.getElementById('preview-frame');
const terminalOutput = document.getElementById('terminal-output');
const emptyState = document.getElementById('empty-state');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar');
const trackBadge = document.getElementById('track-badge');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// دالة تحميل الدرس
function loadLesson(id) {
    currentLessonId = id;
    const lesson = lessonsData[id];

    // تحديث النصوص
    titleEl.textContent = lesson.title;
    descEl.innerHTML = lesson.content;
    codeArea.value = lesson.code;
    trackBadge.textContent = lesson.track;

    // إعادة تعيين منطقة الناتج
    previewFrame.classList.add('hidden');
    terminalOutput.classList.add('hidden');
    emptyState.classList.remove('hidden');

    // تحديث القائمة الجانبية (Active Class)
    document.querySelectorAll('.lesson-link').forEach(link => {
        link.classList.remove('active');
        link.querySelector('span').classList.replace('bg-brand-blue', 'bg-gray-700');
        link.querySelector('span').classList.remove('text-white');

        if (link.dataset.id === id) {
            link.classList.add('active');
            link.querySelector('span').classList.replace('bg-gray-700', 'bg-brand-blue');
            link.querySelector('span').classList.add('text-white');
        }
    });

    // تحديث أزرار التنقل
    updateNavButtons();

    // إغلاق القائمة في الجوال إذا كانت مفتوحة
    if (window.innerWidth < 768) {
        toggleSidebar(false);
    }
}

// دالة تشغيل الكود
function runCode() {
    const lesson = lessonsData[currentLessonId];
    const code = codeArea.value;

    emptyState.classList.add('hidden');

    if (lesson.type === 'web') {
        // وضع الويب: استخدام Iframe
        terminalOutput.classList.add('hidden');
        previewFrame.classList.remove('hidden');

        const iframeDoc = previewFrame.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();

    } else {
        // وضع الطرفية: محاكاة
        previewFrame.classList.add('hidden');
        terminalOutput.classList.remove('hidden');

        // تنظيف الطرفية
        terminalOutput.innerHTML = '<div class="opacity-50 mb-2">> جاري التشغيل...</div>';

        // محاكاة بسيطة لمعالجة بعض أكواد بايثون المعروفة
        setTimeout(() => {
            let output = "";
            if (code.includes('print("')) {
                // استخراج النص من print
                const match = code.match(/print\("(.+)"\)/);
                if (match) output += `<div>${match[1]}</div>`;
            }
            if (code.includes('range(')) {
                // محاكاة لوب بسيط
                output += `
                            <div>الرقم الحالي هو: 0</div>
                            <div>الرقم الحالي هو: 1</div>
                            <div>الرقم الحالي هو: 2</div>
                            <div>الرقم الحالي هو: 3</div>
                            <div>الرقم الحالي هو: 4</div>
                        `;
            }

            // إذا لم نجد أنماطاً معروفة
            if (output === "") {
                output = `<div class="text-yellow-500">تم تنفيذ الكود بنجاح (محاكاة).</div>`;
            }

            terminalOutput.innerHTML += output;
            terminalOutput.innerHTML += '<div class="opacity-50 mt-2">> تم التنفيذ.</div>';
        }, 500);
    }
}

// إدارة القائمة الجانبية للجوال
function toggleSidebar(show) {
    if (show) {
        sidebar.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
}

mobileMenuBtn.addEventListener('click', () => toggleSidebar(true));
closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
overlay.addEventListener('click', () => toggleSidebar(false));

// إدارة التنقل (التالي/السابق)
function updateNavButtons() {
    const currentIndex = lessonKeys.indexOf(currentLessonId);

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === lessonKeys.length - 1;

    prevBtn.onclick = () => {
        if (currentIndex > 0) loadLesson(lessonKeys[currentIndex - 1]);
    };
    nextBtn.onclick = () => {
        if (currentIndex < lessonKeys.length - 1) loadLesson(lessonKeys[currentIndex + 1]);
    };
}

// بدء التطبيق
loadLesson('html_intro'); 