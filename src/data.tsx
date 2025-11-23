export const ALL_TESTS = {
    test5: {
        name: 'Bài test 5 - Ngày 23-11-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'Bút chì':", options: ["えんぴつ", "たんぼ", "まんが", "かんじ"], correct: 0, explanation: "えんぴつ nghĩa là Bút chì" },
            { question: "Chọn nghĩa đúng của từ 'Ruộng lúa':", options: ["にほんご", "たんぼ", "でんき", "ほんだな"], correct: 1, explanation: "たんぼ nghĩa là Ruộng lúa" },
            { question: "Chọn nghĩa đúng của từ 'Tiếng Nhật':", options: ["せんたく", "まんが", "にほんご", "しんぶん"], correct: 2, explanation: "にほんご nghĩa là Tiếng Nhật" },
            { question: "Chọn nghĩa đúng của từ 'Truyện tranh':", options: ["えんぴつ", "でんき", "かんじ", "まんが"], correct: 3, explanation: "まんが nghĩa là Truyện tranh" },
            { question: "Chọn nghĩa đúng của từ 'Điện':", options: ["でんき", "たんぼ", "ほんだな", "にほんご"], correct: 0, explanation: "でんき nghĩa là Điện" },
            { question: "Chọn nghĩa đúng của từ 'Việc giặc giũ':", options: ["まんが", "せんたく", "えんぴつ", "しんぶん"], correct: 1, explanation: "せんたく nghĩa là Việc giặc giũ" },
            { question: "Chọn nghĩa đúng của từ 'Chữ Hán':", options: ["でんき", "たんぼ", "かんじ", "ほんだな"], correct: 2, explanation: "かんじ nghĩa là Chữ Hán" },
            { question: "Chọn nghĩa đúng của từ 'Kệ sách':", options: ["にほんご", "せんたく", "まんが", "ほんだな"], correct: 3, explanation: "ほんだな nghĩa là Kệ sách" },
            { question: "Chọn nghĩa đúng của từ 'Báo':", options: ["しんぶん", "えんぴつ", "かんじ", "でんき"], correct: 0, explanation: "しんぶん nghĩa là Báo" }
        ],
        matching: [
            {
                left: ["さっか", "がっき", "にっき", "けっこん", "ざっし", "いっさい", "きって", "きっぷ", "はっぱ", "しっぽ"],
                right: ["Cái đuôi", "Nhật ký", "Tác giả", "Vé tàu", "Nhạc cụ", "Con tem", "1 tuổi", "Tạp chí", "Việc kết hôn", "Chiếc lá"],
                correctPairs: [[0, 2], [1, 4], [2, 1], [3, 8], [4, 7], [5, 6], [6, 5], [7, 3], [8, 9], [9, 0]],
                explanation: "さっか = Tác giả, がっき = Nhạc cụ, にっき = Nhật ký, けっこん = Việc kết hôn, ざっし = Tạp chí, いっさい = 1 tuổi, きって = Con tem, きっぷ = Vé tàu, はっぱ = Chiếc lá, しっぽ = Cái đuôi"
            }
        ]
        ,
        typing: [
            { question: "Tác giả", placeholder: "Nhập từ vựng có nghĩa Tác giả", correct: "さっか", hint: "さっ + か", explanation: "さっか là Tác giả" },
            { question: "Việc kết hôn", placeholder: "Nhập từ vựng có nghĩa Việc kết hôn", correct: "けっこん", hint: "けっ + こん", explanation: "けっこん là Việc kết hôn" },
            { question: "1 tuổi", placeholder: "Nhập từ vựng có nghĩa 1 tuổi", correct: "いっさい", hint: "いっ + さい", explanation: "いっさい là 1 tuổi" },
            { question: "Vé tàu", placeholder: "Nhập từ vựng có nghĩa Vé tàu", correct: "きっぷ", hint: "きっ + ぷ", explanation: "きっぷ là Vé tàu" },
            { question: "Chiếc lá", placeholder: "Nhập từ vựng có nghĩa Chiếc lá", correct: "はっぱ", hint: "はっ + ぱ", explanation: "はっぱ là Chiếc lá" },
            { question: "Cái đuôi", placeholder: "Nhập từ vựng có nghĩa Cái đuôi", correct: "しっぽ", hint: "しっ + ぽ", explanation: "しっぽ là Cái đuôi" }
        ],
        wordConnect: [
            { word: "えんぴつ", options: ["empitsu", "enpitsu", "engpitsu"], correct: 0, explanation: "えんぴつ là empitsu" },
            { word: "たんぼ", options: ["tanbo", "tambo", "tangbo"], correct: 1, explanation: "たんぼ là tambo" },
            { word: "にほんご", options: ["nihomgo", "nihongo", "nihonggo"], correct: 2, explanation: "にほんご là nihonggo" },
            { word: "まんが", options: ["mamga", "manga", "mangga"], correct: 2, explanation: "まんが là mangga" },
            { word: "でんき", options: ["dengki", "denki", "demki"], correct: 0, explanation: "でんき là dengki" },
            { word: "せんたく", options: ["sengtaku", "sentaku", "semtaku"], correct: 1, explanation: "せんたく là sentaku" },
            { word: "かんじ", options: ["kamji", "kangji", "kanji"], correct: 2, explanation: "かんじ là kanji" },
            { word: "ほんだな", options: ["hongdana", "hondana", "homdana"], correct: 1, explanation: "ほんだな là hondana" },
            { word: "しんぶん", options: ["shimbung", "shinbung", "shimbun"], correct: 0, explanation: "しんぶん là shimbung" }
        ],
        fillBlank: [
            {
                sentence: "これはが___き___す",
                blanks: ["っ", "で"],
                options: [["っ", "ん", "い", "き"], ["で", "だ", "に", "ね"]],
                explanation: "これはがっきです = Đây là nhạc cụ"
            },
            {
                sentence: "そ___はにっ___です",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "それはにっきです = Đó là nhật ký"
            },
            {
                sentence: "あれ___ざっ___です",
                blanks: ["は", "し"],
                options: [["は", "が", "を", "に"], ["し", "ち", "き", "り"]],
                explanation: "あれはざっしです = Kia là tạp chí"
            },
            {
                sentence: "こ___は___ってです",
                blanks: ["れ", "き"],
                options: [["れ", "の", "ん", "と"], ["き", "し", "ち", "り"]],
                explanation: "これはきってです = Đây là con tem"
            }
        ],
        sentenceOrder: [
            {
                words: ["で", "ん", "か", "い", "す", "じ", "ま", "な"],
                correct: [3, 6, 7, 1, 5, 0, 4, 2],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["す", "じ", "く", "ま", "い", "で"],
                correct: [4, 3, 2, 1, 5, 0],
                correctSentence: "いまくじです",
                explanation: "いまくじです = Bây giờ là 9 giờ"
            },
            {
                words: ["す", "っ", "に", "は", "で", "き", "こ", "れ"],
                correct: [6, 7, 3, 2, 1, 5, 4, 0],
                correctSentence: "これはにっきです",
                explanation: "これはにっきです = Cái này là nhật kí"
            },
            {
                words: ["き", "す", "っ", "で", "そ", "は", "れ", "が"],
                correct: [4, 6, 5, 7, 2, 0, 3, 1],
                correctSentence: "それはがっきです",
                explanation: "それはがっきです = Cái đó là nhạc cụ"
            }
        ]
    },
    test4: {
        name: 'Bài test 4 - Ngày 09-11-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'lối vào':", options: ["まど", "いりぐち", "ごはん", "かぎ"], correct: 1, explanation: "いりぐち nghĩa là lối vào" },
            { question: "Chọn nghĩa đúng của từ 'lối ra':", options: ["みず", "でぐち", "かべ", "ぴかぴか"], correct: 1, explanation: "でぐち nghĩa là lối ra" },
            { question: "Chọn nghĩa đúng của từ 'chói loá':", options: ["ぴかぴか", "おみやげ", "でぐち", "まど"], correct: 0, explanation: "ぴかぴか nghĩa là chói loá" },
            { question: "Chọn nghĩa đúng của từ 'cửa sổ':", options: ["かべ", "まど", "ごはん", "いりぐち"], correct: 1, explanation: "まど nghĩa là cửa sổ" },
            { question: "Chọn nghĩa đúng của từ 'bức tường':", options: ["ごはん", "かぎ", "かべ", "みず"], correct: 2, explanation: "かべ nghĩa là bức tường" },
            { question: "Chọn nghĩa đúng của từ 'chìa khóa':", options: ["かぎ", "ぴかぴか", "おみやげ", "でぐち"], correct: 0, explanation: "かぎ nghĩa là chìa khóa" },
            { question: "Chọn nghĩa đúng của từ 'nước':", options: ["みず", "まど", "いりぐち", "ごはん"], correct: 0, explanation: "みず nghĩa là nước" },
            { question: "Chọn nghĩa đúng của từ 'cơm':", options: ["かべ", "おみやげ", "ごはん", "ぴかぴか"], correct: 2, explanation: "ごはん nghĩa là cơm" },
            { question: "Chọn nghĩa đúng của từ 'quà lưu niệm':", options: ["おみやげ", "かぎ", "みず", "でぐち"], correct: 0, explanation: "おみやげ nghĩa là quà lưu niệm" }
        ],
        matching: [
            {
                left: ["ぶた", "ばら", "ゆび", "からだ", "かぞく"],
                right: ["gia đình", "ngón tay", "con lợn", "cơ thể", "hoa hồng"],
                correctPairs: [
                    [0, 2],
                    [1, 4],
                    [2, 1],
                    [3, 3],
                    [4, 0]
                ],
                explanation: "ぶた = con lợn, ばら = hoa hồng, ゆび = ngón tay, からだ = cơ thể, かぞく = gia đình"
            }
        ]
        ,
        typing: [
            {
                question: "これはぶたです",
                placeholder: "Nhập câu có nghĩa 'Đây là con heo'",
                correct: "これはぶたです",
                hint: "こ + れ + は + ぶ + た + で + す",
                explanation: "これはぶたです nghĩa là 'Đây là con heo'"
            },
            {
                question: "それははなです",
                placeholder: "Nhập câu có nghĩa 'Đó là hoa'",
                correct: "それははなです",
                hint: "そ + れ + は + は + な + で + す",
                explanation: "それははなです nghĩa là 'Đó là hoa'"
            },
            {
                question: "いまなんじですか",
                placeholder: "Nhập câu có nghĩa 'Bây giờ là mấy giờ?'",
                correct: "いまなんじですか",
                hint: "い + ま + な + ん + じ + で + す + か",
                explanation: "いまなんじですか nghĩa là 'Bây giờ là mấy giờ?'"
            }
        ],
        wordConnect: [
            {
                word: "ぼく",
                options: ["tôi (nam)", "gió", "họa sĩ", "một giờ"],
                correct: 0,
                explanation: "ぼく là tôi (nam)"
            },
            {
                word: "がか",
                options: ["một giờ", "họa sĩ", "màu xanh lá", "nói lưu loát trôi chảy"],
                correct: 1,
                explanation: "がか là họa sĩ"
            },
            {
                word: "みどり",
                options: ["gió", "màu xanh lá", "nói lưu loát trôi chảy", "tôi (nam)"],
                correct: 1,
                explanation: "みどり là màu xanh lá"
            },
            {
                word: "いちじ",
                options: ["một giờ", "họa sĩ", "màu xanh lá", "gió"],
                correct: 0,
                explanation: "いちじ là một giờ"
            },
            {
                word: "ぺらぺら",
                options: ["nói lưu loát trôi chảy", "gió", "một giờ", "họa sĩ"],
                correct: 0,
                explanation: "ぺらぺら là nói lưu loát trôi chảy"
            },
            {
                word: "かぜ",
                options: ["một giờ", "màu xanh lá", "gió", "tôi (nam)"],
                correct: 2,
                explanation: "かぜ là gió"
            }
        ],
        fillBlank: [
            {
                sentence: "い___な___じですか",
                blanks: ["ま", "ん"],
                options: [["ま", "も", "み", "め"], ["ん", "に", "の", "ね"]],
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                sentence: "い___く___です",
                blanks: ["ま", "じ"],
                options: [["ま", "も", "み", "む"], ["じ", "ち", "ぢ", "し"]],
                explanation: "いまくじです = Bây giờ là 9 giờ"
            },
            {
                sentence: "あ___は___べです",
                blanks: ["れ", "か"],
                options: [["れ", "ね", "め", "せ"], ["か", "が", "さ", "た"]],
                explanation: "あれはかべです = Kia là bức tường"
            },
            {
                sentence: "こ___は___です",
                blanks: ["れ", "き"],
                options: [["れ", "ね", "ろ", "り"], ["き", "ぎ", "し", "ち"]],
                explanation: "これはきです = Đây là cái cây"
            },
            {
                sentence: "そ___はい___です",
                blanks: ["れ", "ぬ"],
                options: [["れ", "ね", "ろ", "り"], ["ぬ", "む", "る", "す"]],
                explanation: "それはいぬです = Con đó là con chó"
            }
        ],
        sentenceOrder: [
            {
                words: ["ず", "み", "は", "こ", "れ", "す", "で"],
                correct: [3, 4, 2, 1, 0, 6, 5],
                correctSentence: "これはみずです",
                explanation: "これはみずです = Đây là nước"
            },
            {
                words: ["た", "ぶ", "は", "す", "そ", "れ", "で"],
                correct: [4, 5, 2, 1, 0, 6, 3],
                correctSentence: "それはぶたです",
                explanation: "それはぶたです = Con đó là con lợn"
            },
            {
                words: ["ん", "な", "い", "じ", "で", "か", "す", "ま"],
                correct: [2, 7, 1, 0, 3, 4, 6,5 ],
                correctSentence: "いまなんじですか",
                explanation: "いまなんじですか = Bây giờ là mấy giờ"
            },
            {
                words: ["で", "よ", "い", "ま", "す", "じ"],
                correct: [2, 3, 1, 5, 0, 4],
                correctSentence: "いまよじです",
                explanation: "いまよじです = Bây giờ là 4 giờ"
            },
            {
                words: ["こ", "ね", "す", "れ", "は", "で", "あ"],
                correct: [6, 3, 4, 1, 0, 5, 2],
                correctSentence: "あれはねこです",
                explanation: "あれはねこです = Kia là con mèo"
            }
        ]
    },
    test3: {
        name: 'Bài test 3 - Ngày 02-11-2025',
        multipleChoice: [
            {
                question: "Chọn nghĩa đúng của từ 'Cỏ':",
                options: ["き", "くさ", "えき", "かさ"],
                correct: 1,
                explanation: "くさ nghĩa là Cỏ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'mắt':",
                options: ["き", "くさ", "め", "かさ"],
                correct: 2,
                explanation: "め nghĩa là mắt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cây':",
                options: ["こえ", "あお", "き", "あし"],
                correct: 2,
                explanation: "き nghĩa là Cây"
            },
            {
                question: "Chọn nghĩa đúng của từ 'ga, nhà ga':",
                options: ["えき", "かお", "すいか", "うし"],
                correct: 0,
                explanation: "えき nghĩa là ga, nhà ga"
            },
            {
                question: "Chọn nghĩa đúng của từ 'giọng nói, tiếng nói':",
                options: ["あか", "しお", "いす", "こえ"],
                correct: 3,
                explanation: "こえ nghĩa là giọng nói, tiếng nói"
            },
            {
                question: "Chọn nghĩa đúng của từ 'khuôn mặt':",
                options: ["は", "かお", "て", "くさ"],
                correct: 1,
                explanation: "かお nghĩa là khuôn mặt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'màu xanh nước biển':",
                options: ["き", "えき", "あお", "かさ"],
                correct: 2,
                explanation: "あお nghĩa là màu xanh nước biển"
            },
            {
                question: "Chọn nghĩa đúng của từ 'màu đỏ':",
                options: ["あか", "こえ", "あし", "すいか"],
                correct: 0,
                explanation: "あか nghĩa là màu đỏ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cây dù':",
                options: ["うし", "しお", "かさ", "いす"],
                correct: 2,
                explanation: "かさ nghĩa là Cây dù"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Bàn chân':",
                options: ["は", "あし", "て", "くさ"],
                correct: 1,
                explanation: "あし nghĩa là Bàn chân"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Dưa hấu':",
                options: ["き", "えき", "こえ", "すいか"],
                correct: 3,
                explanation: "すいか nghĩa là Dưa hấu"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Con bò':",
                options: ["うし", "かお", "あお", "あか"],
                correct: 0,
                explanation: "うし nghĩa là Con bò"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Muối':",
                options: ["かさ", "しお", "あし", "すいか"],
                correct: 1,
                explanation: "しお nghĩa là Muối"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Ghế':",
                options: ["うし", "いす", "は", "て"],
                correct: 1,
                explanation: "いす nghĩa là Ghế"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Răng':",
                options: ["くさ", "き", "は", "えき"],
                correct: 2,
                explanation: "は nghĩa là Răng"
            },
            {
                question: "Chọn nghĩa đúng của từ 'tay':",
                options: ["こえ", "かお", "あお", "て"],
                correct: 3,
                explanation: "て nghĩa là tay"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi sáng':",
                options: ["Konnichiwa", "Ohayougozaimasu", "Oyasuminasai", "Konbanwa"],
                correct: 1,
                explanation: "Ohayougozaimasu nghĩa là Chào buổi sáng"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi chiều':",
                options: ["Konbanwa", "Konnichiwa", "sayonara", "Ohayougozaimasu"],
                correct: 1,
                explanation: "Konnichiwa nghĩa là Chào buổi chiều"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chào buổi tối':",
                options: ["Oyasuminasai", "Konbanwa", "Konnichiwa", "Sumimasen"],
                correct: 1,
                explanation: "Konbanwa nghĩa là Chào buổi tối"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Rất vui được gặp bạn':",
                options: ["Hajimemashite", "Arigato gozaimasu", "onegaishimasu", "Dooitashimashite"],
                correct: 0,
                explanation: "Hajimemashite nghĩa là Rất vui được gặp bạn"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Vui lòng giúp đỡ':",
                options: ["Arigato gozaimasu", "onegaishimasu", "Sumimasen", "Dooitashimashite"],
                correct: 1,
                explanation: "onegaishimasu nghĩa là Vui lòng giúp đỡ"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Chúc ngủ ngon':",
                options: ["Ohayougozaimasu", "Konnichiwa", "Oyasuminasai", "Konbanwa"],
                correct: 2,
                explanation: "Oyasuminasai nghĩa là Chúc ngủ ngon"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Tạm biệt':",
                options: ["sayonara", "Sumimasen", "Konnichiwa", "Dooitashimashite"],
                correct: 0,
                explanation: "sayonara nghĩa là Tạm biệt"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Cảm ơn':",
                options: ["Dooitashimashite", "onegaishimasu", "Arigato gozaimasu", "Sumimasen"],
                correct: 2,
                explanation: "Arigato gozaimasu nghĩa là Cảm ơn"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Không có chi':",
                options: ["Sumimasen", "Arigato gozaimasu", "sayonara", "Dooitashimashite"],
                correct: 3,
                explanation: "Dooitashimashite nghĩa là Không có chi"
            },
            {
                question: "Chọn nghĩa đúng của từ 'Xin lỗi':",
                options: ["onegaishimasu", "Dooitashimashite", "Sumimasen", "Arigato gozaimasu"],
                correct: 2,
                explanation: "Sumimasen nghĩa là Xin lỗi"
            }
        ],
        matching: [
            {
                left: ["おかし", "せかい", "くち", "つくえ", "たいこ", "つき", "ぬの", "にく", "いぬ", "ねこ"],
                right: ["Con mèo", "Thịt", "Bánh kẹo", "Cái trống", "Mặt trăng", "cái bàn", "Thế giới", "miệng", "Vải", "Con chó"],
                correctPairs: [[0, 2], [1, 6], [2, 7], [3, 5], [4, 3], [5, 4], [6, 8], [7, 1], [8, 9], [9, 0]],
                explanation: "おかし = Bánh kẹo, せかい = Thế giới, くち = miệng, つくえ = cái bàn, たいこ = Cái trống, つき = Mặt trăng, ぬの = Vải, にく = Thịt, いぬ = Con chó, ねこ = Con mèo"
            }
        ],
        typing: [
            {
                question: "21",
                placeholder: "Nhập từ vựng có nghĩa 21",
                correct: "nijyuuichi",
                hint: "ni + jyuu + ichi",
                explanation: "nijyuuichi là 21"
            },
            {
                question: "92",
                placeholder: "Nhập từ vựng có nghĩa 92",
                correct: "kyuujyuuni",
                hint: "kyuu + jyuu + ni",
                explanation: "kyuujyuuni là 92"
            },
            {
                question: "83",
                placeholder: "Nhập từ vựng có nghĩa 83",
                correct: "hachijyuusan",
                hint: "hachi + jyuu + san",
                explanation: "hachijyuusan là 83"
            },
            {
                question: "14",
                placeholder: "Nhập từ vựng có nghĩa 14",
                correct: "jyuuyon",
                hint: "jyuu + yon",
                explanation: "jyuuyon là 14"
            },
            {
                question: "43",
                placeholder: "Nhập từ vựng có nghĩa 43",
                correct: "yonjyuusan",
                hint: "yon + jyuu + san",
                explanation: "yonjyuusan là 43"
            },
            {
                question: "76",
                placeholder: "Nhập từ vựng có nghĩa 76",
                correct: "nanajyuuroku",
                hint: "nana + jyuu + roku",
                explanation: "nanajyuuroku là 76"
            },
            {
                question: "35",
                placeholder: "Nhập từ vựng có nghĩa 35",
                correct: "sanjyuugo",
                hint: "san + jyuu + go",
                explanation: "sanjyuugo là 35"
            },
            {
                question: "59",
                placeholder: "Nhập từ vựng có nghĩa 59",
                correct: "gojyuukyuu",
                hint: "go + jyuu + kyuu",
                explanation: "gojyuukyuu là 59"
            },
            {
                question: "67",
                placeholder: "Nhập từ vựng có nghĩa 67",
                correct: "rokujyuunana",
                hint: "roku + jyuu + nana",
                explanation: "rokujyuunana là 67"
            },
            {
                question: "28",
                placeholder: "Nhập từ vựng có nghĩa 28",
                correct: "nijyuuhachi",
                hint: "ni + jyuu + hachi",
                explanation: "nijyuuhachi là 28"
            }
        ],
        wordConnect: [
            {
                word: "Vải",
                options: ["ぬの", "にく", "いぬ", "はな"],
                correct: 0,
                explanation: "Vải là ぬの"
            },
            {
                word: "Thịt",
                options: ["ねこ", "にく", "そと", "は"],
                correct: 1,
                explanation: "Thịt là にく"
            },
            {
                word: "Con chó",
                options: ["ほし", "ふね", "いぬ", "なか"],
                correct: 2,
                explanation: "Con chó là いぬ"
            },
            {
                word: "Con mèo",
                options: ["はな", "ひと", "ぬの", "ねこ"],
                correct: 3,
                explanation: "Con mèo là ねこ"
            },
            {
                word: "Bên ngoài",
                options: ["そと", "は", "にく", "ふね"],
                correct: 0,
                explanation: "Bên ngoài là そと"
            },
            {
                word: "Bên trong",
                options: ["いぬ", "なか", "ほし", "ぬの"],
                correct: 1,
                explanation: "Bên trong là なか"
            },
            {
                word: "Răng",
                options: ["ねこ", "はな", "は", "ひと"],
                correct: 2,
                explanation: "Răng là は"
            },
            {
                word: "Hoa",
                options: ["ふね", "にく", "そと", "はな"],
                correct: 3,
                explanation: "Hoa là はな"
            },
            {
                word: "Con người",
                options: ["ひと", "ぬの", "ほし", "なか"],
                correct: 0,
                explanation: "Con người là ひと"
            },
            {
                word: "Tàu thuyền",
                options: ["いぬ", "ふね", "は", "ねこ"],
                correct: 1,
                explanation: "Tàu thuyền là ふね"
            },
            {
                word: "Ngôi sao",
                options: ["そと", "はな", "ほし", "にく"],
                correct: 2,
                explanation: "Ngôi sao là ほし"
            }
        ],
        fillBlank: [
            {
                sentence: "そ___",
                blanks: ["と"],
                options: [["た", "と", "て", "つ"]],
                explanation: "そと = Bên ngoài"
            },
            {
                sentence: "な___",
                blanks: ["か"],
                options: [["き", "く", "か", "け"]],
                explanation: "なか = Bên trong"
            },
            {
                sentence: "は___",
                blanks: ["な"],
                options: [["に", "な", "ぬ", "ね"]],
                explanation: "はな = Hoa"
            },
            {
                sentence: "ひ___",
                blanks: ["と"],
                options: [["て", "つ", "と", "た"]],
                explanation: "ひと = Con người"
            },
            {
                sentence: "ふ___",
                blanks: ["ね"],
                options: [["ね", "な", "に", "の"]],
                explanation: "ふね = Tàu thuyền"
            },
            {
                sentence: "ほ___",
                blanks: ["し"],
                options: [["さ", "す", "し", "せ"]],
                explanation: "ほし = Ngôi sao"
            },
            {
                sentence: "み___",
                blanks: ["ち"],
                options: [["て", "ち", "つ", "と"]],
                explanation: "みち = Con đường"
            },
            {
                sentence: "ま___",
                blanks: ["ち"],
                options: [["ち", "た", "て", "つ"]],
                explanation: "まち = Con phố"
            },
            {
                sentence: "み___",
                blanks: ["み"],
                options: [["む", "み", "ま", "め"]],
                explanation: "みみ = Cái tai"
            },
            {
                sentence: "む___",
                blanks: ["し"],
                options: [["す", "せ", "し", "さ"]],
                explanation: "むし = sâu, côn trùng"
            },
            {
                sentence: "ら___",
                blanks: ["ん"],
                options: [["ん", "わ", "を", "ね"]],
                explanation: "らん = hoa lan"
            },
            {
                sentence: "や___や",
                blanks: ["お"],
                options: [["え", "お", "あ", "い"]],
                explanation: "やおや = tiệm rau"
            },
            {
                sentence: "く___り___",
                blanks: ["す", "や"],
                options: [["し", "す", "さ", "せ"], ["よ", "ゆ", "や", "ら"]],
                explanation: "くすりや = tiệm thuốc"
            },
            {
                sentence: "し___",
                blanks: ["ろ"],
                options: [["ら", "り", "る", "ろ"]],
                explanation: "しろ = màu trắng"
            },
            {
                sentence: "く___",
                blanks: ["ろ"],
                options: [["ろ", "り", "れ", "る"]],
                explanation: "くろ = màu đen"
            },
            {
                sentence: "ひ___",
                blanks: ["る"],
                options: [["ら", "る", "り", "れ"]],
                explanation: "ひる = buổi trưa"
            },
            {
                sentence: "よ___",
                blanks: ["る"],
                options: [["れ", "り", "る", "ろ"]],
                explanation: "よる = buổi tối"
            },
            {
                sentence: "は___",
                blanks: ["れ"],
                options: [["ら", "れ", "り", "る"]],
                explanation: "はれ = trời nắng"
            },
            {
                sentence: "か___",
                blanks: ["わ"],
                options: [["を", "わ", "ん", "ね"]],
                explanation: "かわ = con sông"
            },
            {
                sentence: "も___",
                blanks: ["も"],
                options: [["ま", "も", "む", "め"]],
                explanation: "もも = Quả đào"
            },
            {
                sentence: "あ___",
                blanks: ["め"],
                options: [["む", "ま", "め", "も"]],
                explanation: "あめ = Mưa"
            },
            {
                sentence: "や___",
                blanks: ["ま"],
                options: [["ま", "み", "む", "め"]],
                explanation: "やま = Ngọn núi"
            },
            {
                sentence: "ゆ___",
                blanks: ["き"],
                options: [["け", "き", "く", "か"]],
                explanation: "ゆき = Tuyết"
            },
            {
                sentence: "ゆ___",
                blanks: ["め"],
                options: [["ま", "め", "み", "も"]],
                explanation: "ゆめ = Giấc mơ"
            },
            {
                sentence: "へ___",
                blanks: ["や"],
                options: [["ゆ", "よ", "や", "ら"]],
                explanation: "へや = Căn phòng"
            },
            {
                sentence: "や___み",
                blanks: ["す"],
                options: [["さ", "し", "す", "せ"]],
                explanation: "やすみ = Nghỉ ngơi"
            },
            {
                sentence: "わ___し",
                blanks: ["た"],
                options: [["て", "た", "つ", "と"]],
                explanation: "わたし = tôi"
            },
            {
                sentence: "に___ん",
                blanks: ["ほ"],
                options: [["は", "ほ", "ひ", "へ"]],
                explanation: "にほん = Nhật Bản"
            }
        ],
        sentenceOrder: [
            {
                words: ["い", "す", "か"],
                correct: [1, 0, 2],
                correctSentence: "すいか",
                explanation: "すいか = Dưa hấu"
            },
            {
                words: ["か", "お", "し"],
                correct: [1, 0, 2],
                correctSentence: "おかし",
                explanation: "おかし = Bánh kẹo"
            },
            {
                words: ["か", "せ", "い"],
                correct: [1, 0, 2],
                correctSentence: "せかい",
                explanation: "せかい = Thế giới"
            },
            {
                words: ["く", "え", "つ"],
                correct: [2, 0, 1],
                correctSentence: "つくえ",
                explanation: "つくえ = cái bàn"
            },
            {
                words: ["い", "た", "こ"],
                correct: [1, 0, 2],
                correctSentence: "たいこ",
                explanation: "たいこ = Cái trống"
            },
            {
                words: ["す", "や", "く", "り"],
                correct: [2, 0, 3, 1],
                correctSentence: "くすりや",
                explanation: "くすりや = tiệm thuốc"
            },
            {
                words: ["す", "や", "み"],
                correct: [1, 0, 2],
                correctSentence: "やすみ",
                explanation: "やすみ = Nghỉ ngơi"
            },
            {
                words: ["た", "わ", "し"],
                correct: [1, 0, 2],
                correctSentence: "わたし",
                explanation: "わたし = tôi"
            },
            {
                words: ["ほ", "に", "ん"],
                correct: [1, 0, 2],
                correctSentence: "にほん",
                explanation: "にほん = Nhật Bản"
            }
        ]
    },
    test2: {
        name: 'Bài test 2 - Ngày 26-10-2025',
        multipleChoice: [
            { question: "Chọn nghĩa đúng của từ 'hoa anh đào'", options: ["さくら", "あり", "しろ", "くろ"], correct: 0, explanation: "さくら nghĩa là hoa anh đào" },
            { question: "Chọn nghĩa đúng của từ 'con kiến'", options: ["さる", "あり", "かわ", "ひる"], correct: 1, explanation: "あり nghĩa là con kiến" },
            { question: "Chọn nghĩa đúng của từ 'con khỉ'", options: ["かれ", "さる", "にほん", "やおや"], correct: 1, explanation: "さる nghĩa là con khỉ" },
            { question: "Chọn nghĩa đúng của từ 'bạn trai'", options: ["わたし", "くすりや", "かれ", "はれ"], correct: 2, explanation: "かれ nghĩa là bạn trai" },
            { question: "Chọn nghĩa đúng của từ 'buổi trưa'", options: ["ひる", "らん", "にほん", "しろ"], correct: 0, explanation: "ひる nghĩa là buổi trưa" },
            { question: "Chọn nghĩa đúng của từ 'tiệm thuốc'", options: ["やおや", "かわ", "くすりや", "かんたん"], correct: 2, explanation: "くすりや nghĩa là tiệm thuốc" },
            { question: "Chọn nghĩa đúng của từ 'màu trắng'", options: ["くろ", "しろ", "さくら", "ひる"], correct: 1, explanation: "しろ nghĩa là màu trắng" },
            { question: "Chọn nghĩa đúng của từ 'màu đen'", options: ["くろ", "あり", "はれ", "かわ"], correct: 0, explanation: "くろ nghĩa là màu đen" },

        ],
        matching: [
            {
                left: ["Ohayougozaimasu", "Konnichiwa", "Konbanwa", "Hajimemashite", "Onegaishimasu", "Oyasuminasai", "Sayonara", "Arigato gozaimasu", "Dooitashimashite", "Sumimasen", "Mou ichido onegai shimasu"],
                right: ["Xin lỗi", "Chào buổi chiều", "Tạm biệt", "Chúc ngủ ngon", "Vui lòng nói lại lần nữa", "Cảm ơn", "Chào buổi sáng", "Không có chi", "Rất vui được gặp bạn", "Chào buổi tối", "Vui lòng giúp đỡ"],
                correctPairs: [[0, 6], [1, 1], [2, 9], [3, 8], [4, 10], [5, 3], [6, 2], [7, 5], [8, 7], [9, 0], [10, 4]],
                explanation: "Ohayougozaimasu = Chào buổi sáng, Konnichiwa = Chào buổi chiều, Konbanwa = Chào buổi tối, Hajimemashite = Rất vui được gặp bạn, Onegaishimasu = Vui lòng giúp đỡ, Oyasuminasai = Chúc ngủ ngon, Sayonara = Tạm biệt, Arigato gozaimasu = Cảm ơn, Dooitashimashite = Không có chi, Sumimasen = Xin lỗi, Mou ichido onegai shimasu = Vui lòng nói lại lần nữa"
            }
        ],
        wordConnect: [
                { word: "かんたん", options: ["con sông", "đơn giản", "nắng", "hoa lan"], correct: 1, explanation: "かんたん là đơn giản" },
                { word: "かわ", options: ["con sông", "tôi", "tiệm rau", "Nhật Bản"], correct: 0, explanation: "かわ là con sông" },
                { word: "わたし", options: ["nắng", "đơn giản", "tôi", "hoa lan"], correct: 2, explanation: "わたし là tôi" },
                { word: "やおや", options: ["con sông", "Nhật Bản", "đơn giản", "tiệm rau"], correct: 3, explanation: "やおや là tiệm rau" },
                { word: "にほん", options: ["Nhật Bản", "nắng", "tôi", "con sông"], correct: 0, explanation: "にほん là Nhật Bản" },
                { word: "はれ", options: ["hoa lan", "tiệm rau", "nắng", "đơn giản"], correct: 2, explanation: "はれ là nắng" },
                { word: "らん", options: ["tôi", "con sông", "Nhật Bản", "hoa lan"], correct: 3, explanation: "らん là hoa lan" }
        ],
        fillBlank: [
            { sentence: "わたし___ ___です", blanks: ["は", "がくせい"], options: [["は", "を", "が", "に"], ["せんせい", "がくせい", "いしゃ", "かいしゃいん"]], explanation: "わたしは がくせいです = Tôi là học sinh" },
            { sentence: "これ___ ___です", blanks: ["は", "ほん"], options: [["は", "を", "が", "の"], ["ほん", "ペン", "ノート", "つくえ"]], explanation: "これは ほんです = Đây là sách" }
        ],
        sentenceOrder: [
            { words: ["です", "がくせい", "は", "わたし"], correct: [3, 2, 1, 0], correctSentence: "わたし は がくせい です", explanation: "わたし は がくせい です (Tôi là học sinh)" }
        ],
        typing: [
            { question: "Hoa anh đào", placeholder: "Nhập từ vựng có nghĩa Hoa anh đào", correct: "さくら", hint: "さ + く + ら", explanation: "さくら là Hoa anh đào" },
            { question: "Con kiến", placeholder: "Nhập từ vựng có nghĩa Con kiến", correct: "あり", hint: "あ + り", explanation: "あり là Con kiến" },
            { question: "Con khỉ", placeholder: "Nhập từ vựng có nghĩa Con khỉ", correct: "さる", hint: "さ + る", explanation: "さる là Con khỉ" },
            { question: "Bạn trai", placeholder: "Nhập từ vựng có nghĩa Bạn trai", correct: "かれ", hint: "か + れ", explanation: "かれ là Bạn trai" },
            { question: "Buổi trưa", placeholder: "Nhập từ vựng có nghĩa Buổi trưa", correct: "ひる", hint: "ひ + る", explanation: "ひる là Buổi trưa" },
            { question: "Tiệm thuốc", placeholder: "Nhập từ vựng có nghĩa Tiệm thuốc", correct: "くすりや", hint: "く + す + り + や", explanation: "くすりや là Tiệm thuốc" },
            { question: "Màu trắng", placeholder: "Nhập từ vựng có nghĩa Màu trắng", correct: "しろ", hint: "し + ろ", explanation: "しろ là Màu trắng" },
            { question: "Màu đen", placeholder: "Nhập từ vựng có nghĩa Màu đen", correct: "くろ", hint: "く + ろ", explanation: "くろ là Màu đen" },
            { question: "Đơn giản", placeholder: "Nhập từ vựng có nghĩa Đơn giản", correct: "かんたん", hint: "か + ん + た + ん", explanation: "かんたん là Đơn giản" },
            { question: "Con sông", placeholder: "Nhập từ vựng có nghĩa Con sông", correct: "かわ", hint: "か + わ", explanation: "かわ là Con sông" },
            { question: "Tôi", placeholder: "Nhập từ vựng có nghĩa Tôi", correct: "わたし", hint: "わ + た + し", explanation: "わたし là Tôi" },
            { question: "Tiệm rau", placeholder: "Nhập từ vựng có nghĩa Tiệm rau", correct: "やおや", hint: "や + お + や", explanation: "やおや là Tiệm rau" },
            { question: "Nhật Bản", placeholder: "Nhập từ vựng có nghĩa Nhật Bản", correct: "にほん", hint: "に + ほ + ん", explanation: "にほん là Nhật Bản" },
            { question: "Nắng", placeholder: "Nhập từ vựng có nghĩa Nắng", correct: "はれ", hint: "は + れ", explanation: "はれ là Nắng" },
            { question: "Hoa lan", placeholder: "Nhập từ vựng có nghĩa Hoa lan", correct: "らん", hint: "ら + ん", explanation: "らん là Hoa lan" }
        ]
    },
    test1: {
        name: 'Bài test 1 - Ngày 19-10-2025',
        multipleChoice: [
            { question: "Chọn từ đúng cho từ con đường:", options: ["みち", "いぬ", "とり", "さかな"], correct: 0, explanation: "みち　nghĩa là con đường " },
            { question: "Chọn nghĩa đúng của đường phố/con phố:", options: ["ほし", "まち", "もも", "て"], correct: 1, explanation: "まち nghĩa là đường phố/con phố" },
            { question: "Chọn từ đúng cho từ cái tai:", options: ["みち", "ねこ", "とり", "みみ"], correct: 3, explanation: "みみ　nghĩa là cái tai " },
            { question: "Chọn từ đúng cho từ côn trùng:", options: ["やま", "むし", "あめ", "さかな"], correct: 1, explanation: "むし　nghĩa là côn trùng " },
            { question: "Chọn từ đúng cho từ con mắt:", options: ["みち", "ねこ", "とり", "め"], correct: 3, explanation: "め　nghĩa là con mắt " }
        ],
        matching: [{ left: ["へや", "あめ", "やま", "ゆき", "ゆめ"], right: ["Giấc mơ", "Mưa", "Căn phòng", "Ngọn núi", "Tuyết" ], correctPairs: [[0, 2], [1, 1], [2, 3], [3, 4], [4, 0]],
            explanation: "へや = Căn phòng, あめ = Mưa, やま = Ngọn núi, ゆき = Tuyết, ゆめ = Giấc mơ" }],
        fillBlank: [
            { sentence: "わたし___ ___です", blanks: ["は", "がくせい"], options: [["は", "を", "が", "に"], ["せんせい", "がくせい", "いしゃ", "かいしゃいん"]], explanation: "わたしは がくせいです = Tôi là học sinh" },
            { sentence: "これ___ ___です", blanks: ["は", "ほん"], options: [["は", "を", "が", "の"], ["ほん", "ペン", "ノート", "つくえ"]], explanation: "これは ほんです = Đây là sách" }
        ],
        wordConnect: [
            { word: "もも", options: ["🌙", "🌇", "⭐", "🍑"], correct: 3, explanation: "もも là quả đào" },
            { word: "やすみ", options: ["⛵", "👤", "😴", "🌸"], correct: 2, explanation: "やすみ là nghỉ ngơi" }
        ],
        sentenceOrder: [
            { words: ["です", "がくせい", "は", "わたし"], correct: [3, 2, 1, 0], correctSentence: "わたし は がくせい です", explanation: "わたし は がくせい です (Tôi là học sinh)" }
        ],
        typing: [
            { question: "Con đường", placeholder: "Nhập từ vựng", correct: "みち", hint: "も + も", explanation: "みち là Con đường" },
            { question: "Con phố", placeholder: "Nhập từ vựng", correct: "まち", hint: "ね + こ", explanation: "まち là Con phố" },
            { question: "Cái tai", placeholder: "Nhập từ vựng", correct: "みみ", hint: "も + も", explanation: "みみ là Cái tai" },
            { question: "Côn trùng", placeholder: "Nhập từ vựng", correct: "むし", hint: "も + も", explanation: "むし là Côn trùng" },
            { question: "Con mắt", placeholder: "Nhập từ vựng", correct: "め", hint: "も + も", explanation: "め là Con mắt" },
            { question: "Quả đào", placeholder: "Nhập từ vựng", correct: "もも", hint: "も + も", explanation: "もも là Quả đào" },
            { question: "Mưa", placeholder: "Nhập từ vựng", correct: "あめ", hint: "も + も", explanation: "あめ là Mưa" },
            { question: "Ngọn núi", placeholder: "Nhập từ vựng", correct: "やま", hint: "も + も", explanation: "やま là Ngọn núi" },
            { question: "Tuyết", placeholder: "Nhập từ vựng", correct: "ゆき", hint: "も + も", explanation: "ゆき là Tuyết" },
            { question: "Giấc mơ", placeholder: "Nhập từ vựng", correct: "ゆめ", hint: "も + も", explanation: "ゆめ là Giấc mơ" },
            { question: "Căn phòng", placeholder: "Nhập từ vựng", correct: "へや", hint: "も + も", explanation: "へや là Căn phòng" },
            { question: "Nghỉ ngơi", placeholder: "Nhập từ vựng", correct: "やすみ", hint: "も + も", explanation: "やすみ là Nghỉ ngơi" },
        ]
    }
};