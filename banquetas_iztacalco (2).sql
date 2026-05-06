-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2026 a las 05:05:39
-- Versión del servidor: 9.6.0
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banquetas_iztacalco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `claves_colonia`
--

CREATE TABLE `claves_colonia` (
  `id_clave` int NOT NULL,
  `clave` varchar(50) NOT NULL,
  `id_colonia` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `claves_colonia`
--

INSERT INTO `claves_colonia` (`id_clave`, `clave`, `id_colonia`) VALUES
(4, '06-019', 2),
(5, '06-028', 2),
(6, '06-028', 3),
(1, '06-043', 1),
(2, '06-044', 1),
(3, '06-045', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colonias`
--

CREATE TABLE `colonias` (
  `id_colonia` int NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `id_creador` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `colonias`
--

INSERT INTO `colonias` (`id_colonia`, `nombre`, `id_creador`) VALUES
(1, 'AGRÍCOLA ORIENTAL', 1),
(2, 'MILITAR MARTE', 1),
(3, 'REFORMA IZTACCÍHUATL SUR', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id_color` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `id_creador` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `colores`
--

INSERT INTO `colores` (`id_color`, `nombre`, `id_creador`) VALUES
(1, 'Rosa Mexicano', 1),
(2, 'Rojo', 1),
(3, 'Gris', 1),
(4, 'Blanco', 1),
(5, 'Crema / Beige', 1),
(6, 'Café / Chocolate', 1),
(7, 'Naranja', 1),
(8, 'Amarillo', 1),
(9, 'Verde', 1),
(10, 'Azul', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales_fachada`
--

CREATE TABLE `materiales_fachada` (
  `id_material_fachada` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_creador` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `materiales_fachada`
--

INSERT INTO `materiales_fachada` (`id_material_fachada`, `nombre`, `id_creador`) VALUES
(1, 'Pintura exterior', 1),
(2, 'Concreto aparente', 1),
(3, 'Ladrillo (tabique rojo)', 1),
(4, 'Block (concreto)', 1),
(5, 'Piedra natural', 1),
(6, 'Madera', 1),
(7, 'Metal (acero / aluminio / lámina)', 1),
(8, 'Vidrio (fachada tipo curtain wall)', 1),
(9, 'PVC / vinil / plástico', 1),
(10, 'Cerámica / azulejo', 1),
(11, 'Porcelanato', 1),
(12, 'Estuco / aplanado', 1),
(13, 'Fachada verde (vegetación)', 1),
(14, 'Rejas / herrería decorativa', 1),
(15, 'Celosías (metal, concreto o madera)', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiales_puerta`
--

CREATE TABLE `materiales_puerta` (
  `id_material_puerta` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_creador` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `materiales_puerta`
--

INSERT INTO `materiales_puerta` (`id_material_puerta`, `nombre`, `id_creador`) VALUES
(1, 'Madera', 1),
(2, 'Metal (Acero / Aluminio)', 1),
(3, 'Vidrio', 1),
(4, 'PVC / Plástico', 1),
(5, 'Fibra de Vidrio', 1),
(6, 'Laminados', 1),
(7, 'Reja', 1),
(8, 'N/A', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `referencias`
--

CREATE TABLE `referencias` (
  `id_referencia` int NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id_registro` int NOT NULL,
  `id_usuario` int NOT NULL,
  `nombre_contacto` varchar(100) DEFAULT NULL,
  `apellido_paterno` varchar(100) DEFAULT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `direccion_calle_numero` varchar(255) DEFAULT NULL,
  `latitud` decimal(10,8) DEFAULT NULL,
  `longitud` decimal(11,8) DEFAULT NULL,
  `id_colonia` int NOT NULL,
  `id_seccion` int DEFAULT NULL,
  `id_clave` int DEFAULT NULL,
  `estatus_banqueta` enum('Normal','Cuarteadura','Destruida','No existe') DEFAULT 'Normal',
  `ancho_banqueta` decimal(10,2) DEFAULT NULL,
  `largo_banqueta` decimal(10,2) DEFAULT NULL,
  `color_fachada_id` int DEFAULT NULL,
  `material_fachada_id` int DEFAULT NULL,
  `color_puerta_id` int DEFAULT NULL,
  `material_puerta_id` int DEFAULT NULL,
  `estatus` enum('PENDIENTE','LIBERADO','RECHAZADO') DEFAULT 'PENDIENTE',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_imagenes`
--

CREATE TABLE `registro_imagenes` (
  `id_imagen` int NOT NULL,
  `id_registro` int NOT NULL,
  `url_foto` varchar(255) NOT NULL,
  `tipo` enum('ANTES','DESPUES','DETALLE','REFERENCIA') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro_referencias`
--

CREATE TABLE `registro_referencias` (
  `id_registro_ref` int NOT NULL,
  `id_registro` int NOT NULL,
  `id_referencia` int NOT NULL,
  `descripcion_detallada` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `id_seccion` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `id_colonia` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id_seccion`, `nombre`, `id_colonia`) VALUES
(1, '1820', 2),
(6, '1821', 3),
(2, '1822', 2),
(7, '1822', 3),
(3, '1823', 2),
(8, '1823', 3),
(4, '1824', 2),
(9, '1825', 3),
(10, '1826', 3),
(5, '1830', 2),
(11, '1833', 1),
(12, '1834', 1),
(13, '1835', 1),
(14, '1836', 1),
(15, '1840', 1),
(16, '1841', 1),
(17, '1842', 1),
(18, '1843', 1),
(19, '1844', 1),
(20, '1845', 1),
(21, '1901', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido_paterno` varchar(100) NOT NULL,
  `apellido_materno` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `hierarchy` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido_paterno`, `apellido_materno`, `username`, `password`, `created_at`, `hierarchy`) VALUES
(1, 'José Armando', 'Moreno', 'Tolentino', 'mtjamx', '$2b$10$jYYoWUi7K7NTYsc3La4S9e1o./YgxUTk.S7m7eezsF9o5Bb4Du9NO', '2026-05-04 19:43:01', 1),
(2, 'esperanza', 'mendoza', 'mendoza', 'luna2196', 'user123', '2026-05-05 20:31:07', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `claves_colonia`
--
ALTER TABLE `claves_colonia`
  ADD PRIMARY KEY (`id_clave`),
  ADD UNIQUE KEY `clave` (`clave`,`id_colonia`),
  ADD KEY `id_colonia` (`id_colonia`);

--
-- Indices de la tabla `colonias`
--
ALTER TABLE `colonias`
  ADD PRIMARY KEY (`id_colonia`),
  ADD KEY `id_creador` (`id_creador`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id_color`),
  ADD KEY `id_creador` (`id_creador`);

--
-- Indices de la tabla `materiales_fachada`
--
ALTER TABLE `materiales_fachada`
  ADD PRIMARY KEY (`id_material_fachada`),
  ADD KEY `id_creador` (`id_creador`);

--
-- Indices de la tabla `materiales_puerta`
--
ALTER TABLE `materiales_puerta`
  ADD PRIMARY KEY (`id_material_puerta`),
  ADD KEY `id_creador` (`id_creador`);

--
-- Indices de la tabla `referencias`
--
ALTER TABLE `referencias`
  ADD PRIMARY KEY (`id_referencia`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id_registro`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_colonia` (`id_colonia`),
  ADD KEY `id_seccion` (`id_seccion`),
  ADD KEY `id_clave` (`id_clave`),
  ADD KEY `color_fachada_id` (`color_fachada_id`),
  ADD KEY `material_fachada_id` (`material_fachada_id`),
  ADD KEY `color_puerta_id` (`color_puerta_id`),
  ADD KEY `material_puerta_id` (`material_puerta_id`);

--
-- Indices de la tabla `registro_imagenes`
--
ALTER TABLE `registro_imagenes`
  ADD PRIMARY KEY (`id_imagen`),
  ADD KEY `id_registro` (`id_registro`);

--
-- Indices de la tabla `registro_referencias`
--
ALTER TABLE `registro_referencias`
  ADD PRIMARY KEY (`id_registro_ref`),
  ADD KEY `id_registro` (`id_registro`),
  ADD KEY `id_referencia` (`id_referencia`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id_seccion`),
  ADD UNIQUE KEY `nombre` (`nombre`,`id_colonia`),
  ADD KEY `id_colonia` (`id_colonia`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `claves_colonia`
--
ALTER TABLE `claves_colonia`
  MODIFY `id_clave` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `colonias`
--
ALTER TABLE `colonias`
  MODIFY `id_colonia` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id_color` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `materiales_fachada`
--
ALTER TABLE `materiales_fachada`
  MODIFY `id_material_fachada` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `materiales_puerta`
--
ALTER TABLE `materiales_puerta`
  MODIFY `id_material_puerta` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `referencias`
--
ALTER TABLE `referencias`
  MODIFY `id_referencia` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id_registro` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_imagenes`
--
ALTER TABLE `registro_imagenes`
  MODIFY `id_imagen` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro_referencias`
--
ALTER TABLE `registro_referencias`
  MODIFY `id_registro_ref` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id_seccion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `claves_colonia`
--
ALTER TABLE `claves_colonia`
  ADD CONSTRAINT `claves_colonia_ibfk_1` FOREIGN KEY (`id_colonia`) REFERENCES `colonias` (`id_colonia`);

--
-- Filtros para la tabla `colonias`
--
ALTER TABLE `colonias`
  ADD CONSTRAINT `colonias_ibfk_1` FOREIGN KEY (`id_creador`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `colores`
--
ALTER TABLE `colores`
  ADD CONSTRAINT `colores_ibfk_1` FOREIGN KEY (`id_creador`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `materiales_fachada`
--
ALTER TABLE `materiales_fachada`
  ADD CONSTRAINT `materiales_fachada_ibfk_1` FOREIGN KEY (`id_creador`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `materiales_puerta`
--
ALTER TABLE `materiales_puerta`
  ADD CONSTRAINT `materiales_puerta_ibfk_1` FOREIGN KEY (`id_creador`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `registros`
--
ALTER TABLE `registros`
  ADD CONSTRAINT `registros_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `registros_ibfk_2` FOREIGN KEY (`id_colonia`) REFERENCES `colonias` (`id_colonia`),
  ADD CONSTRAINT `registros_ibfk_3` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id_seccion`),
  ADD CONSTRAINT `registros_ibfk_4` FOREIGN KEY (`id_clave`) REFERENCES `claves_colonia` (`id_clave`),
  ADD CONSTRAINT `registros_ibfk_5` FOREIGN KEY (`color_fachada_id`) REFERENCES `colores` (`id_color`),
  ADD CONSTRAINT `registros_ibfk_6` FOREIGN KEY (`material_fachada_id`) REFERENCES `materiales_fachada` (`id_material_fachada`),
  ADD CONSTRAINT `registros_ibfk_7` FOREIGN KEY (`color_puerta_id`) REFERENCES `colores` (`id_color`),
  ADD CONSTRAINT `registros_ibfk_8` FOREIGN KEY (`material_puerta_id`) REFERENCES `materiales_puerta` (`id_material_puerta`);

--
-- Filtros para la tabla `registro_imagenes`
--
ALTER TABLE `registro_imagenes`
  ADD CONSTRAINT `registro_imagenes_ibfk_1` FOREIGN KEY (`id_registro`) REFERENCES `registros` (`id_registro`) ON DELETE CASCADE;

--
-- Filtros para la tabla `registro_referencias`
--
ALTER TABLE `registro_referencias`
  ADD CONSTRAINT `registro_referencias_ibfk_1` FOREIGN KEY (`id_registro`) REFERENCES `registros` (`id_registro`),
  ADD CONSTRAINT `registro_referencias_ibfk_2` FOREIGN KEY (`id_referencia`) REFERENCES `referencias` (`id_referencia`);

--
-- Filtros para la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD CONSTRAINT `secciones_ibfk_1` FOREIGN KEY (`id_colonia`) REFERENCES `colonias` (`id_colonia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
