-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: 2019 年 3 月 01 日 18:12
-- サーバのバージョン： 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `law_list`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `law_list_table`
--

CREATE TABLE `law_list_table` (
  `No` int(12) NOT NULL,
  `法令名` varchar(255) NOT NULL,
  `略称` varchar(255) DEFAULT NULL,
  `法令番号` varchar(255) NOT NULL,
  `種別` varchar(255) NOT NULL,
  `施行日` varchar(255) NOT NULL,
  `条文取得API` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `law_list_table`
--

INSERT INTO `law_list_table` (`No`, `法令名`, `略称`, `法令番号`, `種別`, `施行日`, `条文取得API`) VALUES
(1, '金融商品取引法', '金商法', '昭和二十三年法律第二十五号', '法律', '平成三十年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和二十三年法律第二十五号'),
(2, '個人情報の保護に関する法律', '個人情報保護法', '平成十五年法律第五十七号', '法律', '平成二十九年五月三十日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十五年法律第五十七号'),
(3, '銀行法', '', '昭和五十六年法律第五十九号', '法律', '平成三十年六月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和五十六年法律第五十九号'),
(4, '銀行法施行令', '', '昭和五十七年政令第四十号', '政令', '平成三十年八月十六日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和五十七年政令第四十号'),
(5, '銀行法施行規則', '', '昭和五十七年大蔵省令第十号', '内閣府令', '平成三十年八月十六日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和五十七年大蔵省令第十号'),
(6, '民法', '', '明治二十九年法律第八十九号', '法律', '平成三十年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/明治二十九年法律第八十九号'),
(7, '金融商品取引法施行令', '金商法施行令', '昭和四十年政令第三百二十一号', '政令', '平成三十年六月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和四十年政令第三百二十一号'),
(9, '金融商品取引法第二条に規定する定義に関する内閣府令', '定義府令', '平成五年大蔵省令第十四号', '内閣府令', '平成三十年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成五年大蔵省令第十四号'),
(10, '金融商品取引業等に関する内閣府令', '業府令', '平成十九年内閣府令第五十二号', '内閣府令', '平成三十年七月九日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十九年内閣府令第五十二号'),
(11, '有価証券の取引等の規制に関する内閣府令', '取引等規制府令', '平成十九年内閣府令第五十九号', '内閣府令', '平成三十年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十九年内閣府令第五十九号'),
(12, '会社法', '', '平成十七年法律第八十六号', '法律', '平成二十九年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十七年法律第八十六号'),
(13, '会社法施行令', '', '平成十七年政令第三百六十四号', '政令', '基準日時点', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十七年政令第三百六十四号'),
(14, '会社法施行規則', '', '平成十八年法務省令第十二号', '省令', '平成三十年三月二十六日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十八年法務省令第十二号'),
(15, '会社計算規則', '計算規則', '平成十八年法務省令第十三号', '省令', '平成三十年十月十五日', 'http://elaws.e-gov.go.jp/api/1/lawdata/平成十八年法務省令第十三号'),
(20, ' 廃棄物の処理及び清掃に関する法律', '廃掃法', '昭和四十五年法律第百三十七号', '法律', '平成三十年四月一日', 'http://elaws.e-gov.go.jp/api/1/lawdata/昭和四十五年法律第百三十七号');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `law_list_table`
--
ALTER TABLE `law_list_table`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `law_list_table`
--
ALTER TABLE `law_list_table`
  MODIFY `No` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
