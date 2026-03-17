// =============================================
// TO-DO LIST 앱 - dom_assignment.js
// =============================================

// ✅ STEP 1: DOM 요소 선택
// HTML에서 id로 요소를 찾아옴
const taskInput  = document.getElementById('taskInput');   // 입력창
const addButton  = document.getElementById('addButton');   // 추가 버튼
const taskList   = document.getElementById('taskList');    // 목록 <ul>
const clearButton = document.getElementById('clearButton'); // 전체삭제 버튼


// =============================================
// ✅ STEP 2: 할 일 추가 함수
// =============================================
function addTask() {

    // 📌 입력창의 값을 가져오고, 앞뒤 공백 제거
    const taskText = taskInput.value.trim();

    // 📌 입력값이 비어있으면 경고 후 종료
    if (taskText === '') {
        alert('할 일을 입력해주세요!');
        return; // 함수 종료 (아래 코드 실행 안 함)
    }

    // -----------------------------------------------
    // 📌 새로운 <li> 아이템 만들기
    // -----------------------------------------------
    // 구조: <li class="task-item">
    //           <span>할 일 텍스트</span>
    //           <button class="delete-button">삭제</button>
    //       </li>

    // 1) <li> 태그 생성
    const li = document.createElement('li');
    li.className = 'task-item'; // CSS 스타일 적용

    // 2) 할 일 텍스트를 담을 <span> 생성
    const span = document.createElement('span');
    span.textContent = taskText; // 입력한 텍스트 넣기

    // 3) 삭제 버튼 <button> 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.className = 'delete-button'; // CSS 스타일 적용

    // -----------------------------------------------
    // 📌 이벤트 리스너 등록
    // -----------------------------------------------

    // 삭제 버튼 클릭 → 해당 <li> 삭제
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li); // 부모(taskList)에서 자식(li) 제거
    });

    // 텍스트 클릭 → 완료 상태 토글 (취소선 on/off)
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
        // 'completed' 클래스가 있으면 제거, 없으면 추가
        // CSS의 .completed { text-decoration: line-through; } 가 적용됨
    });

    // -----------------------------------------------
    // 📌 요소 조립 및 목록에 추가
    // -----------------------------------------------
    li.appendChild(span);      // <li> 안에 <span> 넣기
    li.appendChild(deleteBtn); // <li> 안에 <button> 넣기
    taskList.appendChild(li);  // <ul> 안에 <li> 넣기

    // 📌 입력창 초기화 (다음 입력을 위해 비워줌)
    taskInput.value = '';
    taskInput.focus(); // 입력창에 커서 다시 올리기
}


// =============================================
// ✅ STEP 3: 전체 삭제 함수
// =============================================
function clearAllTasks() {
    taskList.innerHTML = ''; // 목록 안의 모든 내용을 한번에 비움
}


// =============================================
// ✅ STEP 4: 이벤트 리스너 등록
// =============================================

// 추가 버튼 클릭 → addTask 실행
addButton.addEventListener('click', addTask);

// 입력창에서 Enter 키 누름 → addTask 실행
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// 전체 삭제 버튼 클릭 → clearAllTasks 실행
clearButton.addEventListener('click', clearAllTasks);