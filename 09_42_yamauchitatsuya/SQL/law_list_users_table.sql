-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: 2019 年 3 月 01 日 18:14
-- サーバのバージョン： 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `law_list`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `law_list_users_table`
--

CREATE TABLE `law_list_users_table` (
  `id` int(12) NOT NULL,
  `name` varchar(64) NOT NULL,
  `lid` varchar(128) NOT NULL,
  `lpw` varchar(255) NOT NULL,
  `kanri_flg` int(1) NOT NULL,
  `life_flg` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `law_list_users_table`
--

INSERT INTO `law_list_users_table` (`id`, `name`, `lid`, `lpw`, `kanri_flg`, `life_flg`) VALUES
(1, '管理者', 'test1', '$2y$10$BFSNqjKU1BL.5RWXJT7V1OMqzSUE7neWbRkKU8M6cQ.ubUOMz5ZAC', 1, 0),
(2, '一般ユーザー', 'test2', 'test2', 0, 0),
(3, 'その他', 'test3', 'test3', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `law_list_users_table`
--
ALTER TABLE `law_list_users_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `law_list_users_table`
--
ALTER TABLE `law_list_users_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
