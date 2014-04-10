SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE latin1_general_ci NOT NULL,
  `phone_number` varchar(12) COLLATE latin1_general_ci NOT NULL,
  `reg_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=8 ;

INSERT INTO `contact` (`id`, `name`, `phone_number`, `reg_date`) VALUES
(1, 'Tony Stark', '1029482049', '2003-04-09'),
(2, 'Bruce Wayne', '1094738504', '2004-09-13'),
(3, 'Bruce Banner', '1029573958', '2003-01-01'),
(4, 'Peter Parker', '1059305830', '2005-12-27'),
(5, 'Clark Kent', '1048392857', '2003-02-11'),
(6, 'Juliana', '1056382938', '2009-02-26');