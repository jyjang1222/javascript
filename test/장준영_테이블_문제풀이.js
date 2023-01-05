// 멤버 테이블
memberDB = [
    {"memberNo" : 1001 , "memberName" : "박정훈" , "memberId" : "apple", "memberPw" : "1234",   "memberEmail" : "apple@gmail.com", 		"memberGender" : "남", "memberAge" : 34, "memberAddress" : "군산 영화동", "memberJoinDate" : "2018/12/01"},
    {"memberNo" : 1002 , "memberName" : "이지영" , "memberId" : "pear", "memberPw" : "1234",   "memberEmail" : "pear@gmail.com", 		"memberGender" : "여", "memberAge" : 37, "memberAddress" : "서울 강북구 미아동", "memberJoinDate" : "2019/07/25"},
    {"memberNo" : 1003 , "memberName" : "황지훈" , "memberId" : "mango", "memberPw" : "1234",   "memberEmail" : "mango@gmail.com", 		"memberGender" : "남", "memberAge" : 28, "memberAddress" : "인천 미추홀구 용현동", "memberJoinDate" : "2017/08/16"},
    {"memberNo" : 1004 , "memberName" : "유지혜" , "memberId" : "orange", "memberPw" : "1234",   "memberEmail" : "orange@gmail.com", 	"memberGender" : "여", "memberAge" : 26, "memberAddress" : "서울 영등포구 당산동5가", "memberJoinDate" : "2020/04/05"},
    {"memberNo" : 1005 , "memberName" : "김동현" , "memberId" : "plum", "memberPw" : "1234",   "memberEmail" : "plum@gmail.com", 	"memberGender" : "남", "memberAge" : 21, "memberAddress" : "서울 도봉구 창동", "memberJoinDate" : "2021/03/17"},
    {"memberNo" : 1006 , "memberName" : "최유진" , "memberId" : "kiwi", "memberPw" : "1234",   "memberEmail" : "kiwi@gmail.com", 	"memberGender" : "여", "memberAge" : 25, "memberAddress" : "여수 학동", "memberJoinDate" : "2022/02/13"},
];


reviewDB = [
    {"reviewBoardNo" : 1, "reviewBoardTitle" : "아주 좋아요", "reviewBoardContent" : "늘 사용하던 제품 저렴하게 구매했어요 ㅎㅎ 촉촉하니 너무 좋아요", "reviewBoardDate" : "2023/01/04", "reviewViewCount" : 79, "reviewItemName" : "하이드라비오 에센스 로션 200ml"},
    {"reviewBoardNo" : 2, "reviewBoardTitle" : "아주 좋아요", "reviewBoardContent" : "트러블 피부였는데 이걸로 클렌징한이후 부터는 자극없이 트러블도 없고 클렌징제품중에 이만한 제품 없는듯요!", "reviewBoardDate" : "2023/01/03", "reviewViewCount" : 156, "reviewItemName" : "센시비오 H2O 500ml 트리오 세트"},
    {"reviewBoardNo" : 3, "reviewBoardTitle" : "아주 좋아요", "reviewBoardContent" : "❤아토덤 울트라 크림 촉촉함 그 잡채!❤", "reviewBoardDate" : "2022/10/05", "reviewViewCount" : 31, "reviewItemName" : "아토덤 울트라 크림 200ml (저자극보습크림)"},
    {"reviewBoardNo" : 4, "reviewBoardTitle" : "아주 좋아요", "reviewBoardContent" : "빛이나요", "reviewBoardDate" : "2022/12/31", "reviewViewCount" : 69, "reviewItemName" : "시카비오 포마드 40ml"},
    {"reviewBoardNo" : 5, "reviewBoardTitle" : "맘에 들어요", "reviewBoardContent" : "겨울에 쓰기에는 이만한게 없어요 기본에 충실하고 무향이라 너무 맘에 들어요", "reviewBoardDate" : "2022/12/28", "reviewViewCount" : 27, "reviewItemName" : "[팸셀]아토덤 크림 200ml"},
    {"reviewBoardNo" : 6, "reviewBoardTitle" : "아주 좋아요", "reviewBoardContent" : "최애 클린징 워터입니다.", "reviewBoardDate" : "2022/12/29", "reviewViewCount" : 100, "reviewItemName" : "센시비오 H2O 500ml 트리오 세트"},
];

// 상품 테이블
const itemTable = ['itemNo', 'itemType', 'itemName', 'itemPrice', 'itemDiscount', 'itemImage', 'itemHoverImage', 'itemSold', 'itemDate']

// 상품 리스트
const itemList = [
    {
        'itemNo': 1,
        'itemType': 'lotion',
        'itemName': '카밍 로션 200ml (진정 토너)',
        'itemPrice': 38000,
        'itemDiscount': 15,
        'itemImage': 'items_lotion_01.png',
        'itemHoverImage': 'items_lotion_01_hover.png',
        'itemSold': 13,
        'itemDate': '2023/1/4'
    },
    {
        'itemNo': 2,
        'itemType': 'lotion',
        'itemName': '[대용량출시] 하이드라비오 토너 500ml',
        'itemPrice': 38000,
        'itemDiscount': 20,
        'itemImage': 'items_lotion_02.png',
        'itemHoverImage': 'items_lotion_02_hover.png',
        'itemSold': 9,
        'itemDate': '2022/1/1'
    },
    {
        'itemNo': 3,
        'itemType': 'lotion',
        'itemName': '하이드라비오 토너 250ml',
        'itemPrice': 28000,
        'itemDiscount': 20,
        'itemImage': 'items_lotion_03.png',
        'itemHoverImage': 'items_lotion_03_hover.png',
        'itemSold': 9,
        'itemDate': '2023/1/2'
    },
    {
        'itemNo': 4,
        'itemType': 'lotion',
        'itemName': '세비엄 로션 200ml',
        'itemPrice': 30000,
        'itemDiscount': 0,
        'itemImage': 'items_lotion_04.png',
        'itemHoverImage': 'items_lotion_04_hover.png',
        'itemSold': 5,
        'itemDate': '2023/1/3'
    },
    {
        'itemNo': 5,
        'itemType': 'cream',
        'itemName': '아토덤 인텐시브밤 500ml(병원판매제품)',
        'itemPrice': 44000,
        'itemDiscount': 25,
        'itemImage': 'items_cream_01.png',
        'itemHoverImage': 'items_cream_01_hover.png',
        'itemSold': 9,
        'itemDate': '2023/1/1'
    },
    {
        'itemNo': 6,
        'itemType': 'cream',
        'itemName': '아토덤 울트라 크림 500+200 기획 (저자극보습크림)',
        'itemPrice': 38000,
        'itemDiscount': 0,
        'itemImage': 'items_cream_02.png',
        'itemHoverImage': 'items_cream_02_hover.png',
        'itemSold': 20,
        'itemDate': '2021/1/1'
    },
    {
        'itemNo': 7,
        'itemType': 'cream',
        'itemName': '아토덤 인텐시브 젤 크림 500ml(페이스&바디)',
        'itemPrice': 41000,
        'itemDiscount': 0,
        'itemImage': 'items_cream_03.png',
        'itemHoverImage': 'items_cream_03_hover.png',
        'itemSold': 20,
        'itemDate': '2023/1/5'
    },
    {
        'itemNo': 8,
        'itemType': 'cream',
        'itemName': '아토덤 인텐시브 아이 100ml(병원판매제품)',
        'itemPrice': 29000,
        'itemDiscount': 0,
        'itemImage': 'items_cream_04.png',
        'itemHoverImage': 'items_cream_04_hover.png',
        'itemSold': 20,
        'itemDate': '2023/1/5'
    },
    {
        'itemNo': 9,
        'itemType': 'essence',
        'itemName': '엑셀라쥬 세럼 30ml (360도 안티에이징 세럼)',
        'itemPrice': 170000,
        'itemDiscount': 15,
        'itemImage': 'items_essence_01.png',
        'itemHoverImage': 'items_essence_01_hover.png',
        'itemSold': 7,
        'itemDate': '2023/1/6'
    },
    {
        'itemNo': 10,
        'itemType': 'essence',
        'itemName': '하이드라비오 에센스 로션 200ml',
        'itemPrice': 33000,
        'itemDiscount': 10,
        'itemImage': 'items_essence_02.png',
        'itemHoverImage': 'items_essence_02_hover.png',
        'itemSold': 7,
        'itemDate': '2023/1/8'
    },
    {
        'itemNo': 11,
        'itemType': 'essence',
        'itemName': '얼리안티에이징 3Step 항산화-안티에이징 세트(미스트200ml+에센스+크림)',
        'itemPrice': 155000,
        'itemDiscount': 25,
        'itemImage': 'items_essence_03.png',
        'itemHoverImage': 'items_essence_03_hover.png',
        'itemSold': 10,
        'itemDate': '2023/1/8'
    },
    {
        'itemNo': 12,
        'itemType': 'essence',
        'itemName': '엑셀라쥬 세럼 30ml 듀오 + 셀룰러워터 미스트 100ml',
        'itemPrice': 371000,
        'itemDiscount': 45,
        'itemImage': 'items_essence_04.png',
        'itemHoverImage': 'items_essence_04_hover.png',
        'itemSold': 4,
        'itemDate': '2023/1/8'
    },
    {
        'itemNo': 13,
        'itemType': 'cleansing',
        'itemName': '센시비오 H2O 500ml 트리오 세트',
        'itemPrice': 51000,
        'itemDiscount': 10,
        'itemImage': 'items_cleansing_02.png',
        'itemHoverImage': 'items_cleansing_02_hover.png',
        'itemSold': 8,
        'itemDate': '2023/1/9'
    },
    {
        'itemNo': 14,
        'itemType': 'cleansing',
        'itemName': '아토덤 윌 드 두쉬 1L',
        'itemPrice': 38500,
        'itemDiscount': 30,
        'itemImage': 'items_cleansing_03.png',
        'itemHoverImage': 'items_cleansing_03_hover.png',
        'itemSold': 23,
        'itemDate': '2023/1/9'
    },
    {
        'itemNo': 15,
        'itemType': 'cleansing',
        'itemName': '퓨어 클렌징 폼 150ml (미세거품 클렌저)',
        'itemPrice': 48000,
        'itemDiscount': 20,
        'itemImage': 'items_cleansing_04.png',
        'itemHoverImage': 'items_cleansing_04_hover.png',
        'itemSold': 27,
        'itemDate': '2019/1/10'
    },
    {
        'itemNo': 16,
        'itemType': 'cleansing',
        'itemName': '아토덤 인텐시브밤 500ml + 젤무쌍 500ml 세트(병원판매제품)',
        'itemPrice': 76000,
        'itemDiscount': 0,
        'itemImage': 'items_cleansing_05.png',
        'itemHoverImage': 'items_cleansing_05_hover.png',
        'itemSold': 8,
        'itemDate': '2023/1/3'
    }
];

// 장바구니 테이블
const cartTable = ['cartMemberId', 'cartItemNo', 'cartItemImage', 'cartItemName', 'cartItemPrice', 'cartItemDiscount', 'cartItemCount'];
// 장바구니 아이템 리스트
const cartList = [
    {
        'cartMemberId': 1003,
        'cartItemNo': 1,
        'cartItemImage': 'items_lotion_01.png',
        'cartItemName': '카밍 로션 200ml (진정 토너)',
        'cartItemPrice': 38000,
        'cartItemDiscount': 15,
        'cartItemCount': 2
    },{
        'cartMemberId': 1002,
        'cartItemNo': 6,
        'cartItemImage': 'items_cream_02.png',
        'cartItemName': '아토덤 울트라 크림 500+200 기획 (저자극보습크림)',
        'cartItemPrice': 38000,
        'cartItemDiscount': 0,
        'cartItemCount': 3
    },{
        'cartMemberId': 1005,
        'cartItemNo': 10,
        'cartItemImage': 'items_essence_02.png',
        'cartItemName': '아토덤 울트라 크림 500+200 기획 (저자극보습크림)',
        'cartItemPrice': 33000,
        'cartItemDiscount': 10,
        'cartItemCount': 2
    },{
        'cartMemberId': 1006,
        'cartItemNo': 14,
        'cartItemImage': 'items_cleansing_03.png',
        'cartItemName': '아토덤 윌 드 두쉬 1L',
        'cartItemPrice': 38500,
        'cartItemDiscount': 30,
        'cartItemCount': 2
    }
]

/* 문제
1. 카테고리별로 많이팔린 아이템 n개
2. 이달의 신상품 n개
3. 상품 신상품순
4. 상품 판매순
5. 상품 할인율순
6. 상품 가격낮은순
7. 한페이지에 n개씩 표시
8. 가장 많이 조회한 리뷰
9. 가입일 기준으로 정렬
10. 리뷰가 가장 많이쓰인 상품 */

// itemList.sort((a, b) => b.itemSold - a.itemSold);
const itemType = ['lotion', 'cream', 'essence', 'cleansing']

// 1
// 카테고리별로 많이팔린 아이템 2개
itemList.sort((a, b) => {
    for (const type of itemType) {
        if (a.itemType === type && b.itemType === type) {
            return b.itemSold - a.itemSold
        }
    }
});

for (const type of itemType) {
    let count = 0;
    for (const item of itemList) {
        if (type === item.itemType) {
            console.log(item)
            count += 1;
        }
        if (count === 2) {
            break
        }
    }
}

// 2
// 이 달의 신상품 2023 1월
for (const item of itemList) {
    const $date = item.itemDate.split('/');
    const date = $date.map(n => Number(n));
    // console.log(date);
    const year = date[0];
    const month = date[1];
    if (year === 2023 && month === 1) {
        console.log(item);
    }
}

// // 3
// // 신상품순
itemList.sort((a, b) => {
    const $date1 = a.itemDate.split('/');
    const date1 =$date1.map(n => Number(n));
    const $date2 = b.itemDate.split('/');
    const date2 = $date2.map(n => Number(n));

    for (let i = 0; i < date1.length; i++) {
        if (date1[i] != date2[i]) {
            return date2[i] - date1[i]
        }
    }
})

// console.log(itemList)

// 4
// 판매율 높은순 (내림차순)
itemList.sort((a, b) => b.itemSold - a.itemSold)
console.log(itemList)

// 5
// 할인율 높은순(내림차순)
itemList.sort((a, b) => b.itemDiscount - a.itemDiscount)
console.log(itemList)

// 6
// 모든상품 가격 오름차순 정렬
itemList.sort((a, b) => a.itemPrice - b.itemPrice)
console.log(itemList)

// 로션만 가격 오름차순 정렬
itemList.sort((a, b) => {
    if (a.itemType === 'lotion' && b.itemType === 'lotion') {
        return a.itemPrice - b.itemPrice
    }
});

for (const item of itemList) {
    if (item.itemType === 'lotion') {
        console.log(item.itemName)
        console.log(item.itemPrice)
    }
}

// // 7
// 한페이지에 상품 6개 표시
for (let i = 0; i < 6; i++) {
    console.log(itemList[i])
}

// 8
// 가장 많이 조회한 리뷰
var max = 0; 
for (const review of reviewDB) {
    if (max < review.reviewViewCount) {
        max = review.reviewViewCount
    }
}

for (const review of reviewDB) {
    if (review.reviewViewCount === max) {
        console.log(review);
    }
}

// 9
// 가입일기준 정렬 (내림차순)
memberDB.sort((a, b) => {
    const date1 = a.memberJoinDate.split('/');
    date1.map(n => Number(n));
    const date2 = b.memberJoinDate.split('/');
    date2.map(n => Number(n));

    for (let i = 0; i < date1.length; i++) {
        if (date1[i] != date2[i]) {
            return date2[i] - date1[i]
        }
    }
})
console.log(memberDB)

// 10
// 리뷰가 가장 많이쓰인 상품
var max = 0; 
for (const review of reviewDB) {
    if (max < review.reviewViewCount) {
        max = review.reviewViewCount
    }
}

for (const review of reviewDB) {
    if (review.reviewViewCount === max) {
        console.log(review.reviewItemName);
    }
}