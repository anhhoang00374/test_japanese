export const ALL_TESTS = {
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