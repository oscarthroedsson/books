-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 17, 2024 at 10:16 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fed23_photoApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `Album`
--

CREATE TABLE `Album` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Album`
--

INSERT INTO `Album` (`id`, `title`, `userId`) VALUES
(1, 'Pink Monkeys', 2),
(2, 'banan', 3),
(3, 'Todiiiluu', 3),
(4, 'potatis', 2),
(5, 'Gunilla Person', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Photo`
--

CREATE TABLE `Photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Photo`
--

INSERT INTO `Photo` (`id`, `title`, `url`, `comment`, `userId`) VALUES
(2, 'Pink banana', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(3, 'Title', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(4, 'bajs', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(5, 'snopp', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(6, 'korvibrod', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(7, 'orm', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(8, 'mask', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(9, 'vandrandepinne', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(10, 'gurka bild', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(11, 'No string attached', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(12, '123', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3),
(13, '567', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 3);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(2, 'oscar', 'typeError', 'oscar@gmail.com', '$2b$10$TTh/KbznO/oEDNohJcp0KuGw60oPeNKldX0CZWnizZT5SkGTTnzjK'),
(3, 'Madde', 'syntaxError', 'madde@gmail.com', '$2b$10$fBeKlmQJ6Hg0oexrYv7U/.lK0Ga3ICuWXNYexh1bjxokYWCX0Vc5i'),
(4, 'Pia', 'sizeError', 'pia@gmail.com', '$2b$10$ETx5TZOuHbcuKcpptJYwvOCi78gbC.BI.ZV.es0nfWxr3p0PrwGR6');

-- --------------------------------------------------------

--
-- Table structure for table `_AlbumToPhoto`
--

CREATE TABLE `_AlbumToPhoto` (
  `A` int(10) UNSIGNED NOT NULL,
  `B` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_AlbumToPhoto`
--

INSERT INTO `_AlbumToPhoto` (`A`, `B`) VALUES
(1, 2),
(1, 3),
(1, 11),
(5, 11);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('304ff925-0986-4f86-b0b4-5bded00db9e6', '6b8f2c5175ea890a379fea27cb7739ebd889cad9dc1b14d559e3cc6c768da12c', '2024-02-11 19:14:04.615', '20240211191404_make_user_id_on_photo_not_null', NULL, NULL, '2024-02-11 19:14:04.514', 1),
('43ce1338-888f-4702-9678-42897bc462e5', '02caaa41e9ed1001b5672cf43e8ba18722a32615e404a9f8fdbd0decd13e731f', '2024-02-10 22:14:51.229', '20240210221451_add_user_model', NULL, NULL, '2024-02-10 22:14:51.196', 1),
('77dcb609-794f-4a64-b62c-be4aab37d0e4', 'adb845f70e9912764a65c89d5decf02a858d5dfb778a56595c2a7f8a04b605cc', '2024-02-10 15:42:00.439', '20240210154200_add_album_table_and_relationships_albums_photos_photos_albums', NULL, NULL, '2024-02-10 15:42:00.292', 1),
('b06c2b75-682f-4190-8c09-3801cc1be586', 'eb6df33d0f7dd7bcaca6e3c53d302f89cc0b85e7cad30c67d943466e0414620d', '2024-02-11 15:11:17.175', '20240211151116_add_relation_between_user_album_photo', NULL, NULL, '2024-02-11 15:11:16.962', 1),
('e32e806d-755a-4bb1-b464-b7f0d39598f9', 'ef180945f3e5dec22b6d24dde89561a126c43e944a81afa84d9a59a7820501c6', '2024-02-10 13:43:16.422', '20240210134316_202402101443_add_photo_table', NULL, NULL, '2024-02-10 13:43:16.383', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Album`
--
ALTER TABLE `Album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_userId_fkey` (`userId`);

--
-- Indexes for table `Photo`
--
ALTER TABLE `Photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_userId_fkey` (`userId`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Album`
--
ALTER TABLE `Album`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Photo`
--
ALTER TABLE `Photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Album`
--
ALTER TABLE `Album`
  ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Photo`
--
ALTER TABLE `Photo`
  ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
