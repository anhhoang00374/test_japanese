export const ALL_TESTS = {
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