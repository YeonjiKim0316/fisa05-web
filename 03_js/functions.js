        // document.getElementById('아이디명')
        // document.getElementByClassName('클래스명')
        // document.querySelector('#아이디명', '.클래스명', '태그명') # 처음 값만을 리턴 
        // document.querySelectorAll('#아이디명', '.클래스명', '태그명') # 배열로 리턴
        // 값을 하나씩 증가시키는 함수
        function increase() {
            document.getElementById('num').innerHTML++
        }

        // 특정 요소의 변수명 또는 id(고유값)으로 위치를 선택한 후.addEventListener('이벤트', '이벤트가 일어났을때 동작')
        document.getElementById('plus').addEventListener('click', increase)
        
        
        // 값을 하나씩 감소시키는데 0보다 작으면 더이상 감소시키지 않습니다. - decrease 
        document.getElementById('minus').addEventListener('click', () => {
            let number = document.getElementById('num')
            if ( number.innerHTML > 0) {
                number.innerHTML--
            }
        })
         

        
        // 특정 요소의 변수명 또는 id(고유값)으로 위치를 선택한 후.addEventListener('이벤트', '이벤트가 일어났을때 동작')
        let reset = document.getElementById('reset')
        // 원래 #num 자리의 값이 무엇이었던 0으로 초기화합니다. - reset 
        reset.addEventListener('click', () => {
             document.getElementById('num').innerHTML = 0
        })