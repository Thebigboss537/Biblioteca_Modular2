/****** Object:  Database [Biblioteca-modular]    Script Date: 22/11/2022 4:44:49 p. m. ******/
CREATE DATABASE [Biblioteca-modular]  (EDITION = 'Standard', SERVICE_OBJECTIVE = 'S0', MAXSIZE = 250 GB) WITH CATALOG_COLLATION = SQL_Latin1_General_CP1_CI_AS, LEDGER = OFF;
GO
ALTER DATABASE [Biblioteca-modular] SET COMPATIBILITY_LEVEL = 150
GO
ALTER DATABASE [Biblioteca-modular] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET ARITHABORT OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Biblioteca-modular] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Biblioteca-modular] SET ALLOW_SNAPSHOT_ISOLATION ON 
GO
ALTER DATABASE [Biblioteca-modular] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Biblioteca-modular] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [Biblioteca-modular] SET  MULTI_USER 
GO
ALTER DATABASE [Biblioteca-modular] SET ENCRYPTION ON
GO
ALTER DATABASE [Biblioteca-modular] SET QUERY_STORE = ON
GO
ALTER DATABASE [Biblioteca-modular] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 100, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
/*** The scripts of database scoped configurations in Azure should be executed inside the target database connection. ***/
GO
-- ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 8;
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Autores]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Autores](
	[Id_autor] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_Autores] PRIMARY KEY CLUSTERED 
(
	[Id_autor] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categorias]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categorias](
	[Id_categoria] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](70) NOT NULL,
 CONSTRAINT [PK_Categorias] PRIMARY KEY CLUSTERED 
(
	[Id_categoria] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Devoluciones]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Devoluciones](
	[Id_devolucion] [int] IDENTITY(1,1) NOT NULL,
	[Id_prestamo] [int] NOT NULL,
	[Fecha_devolucion] [datetime2](7) NOT NULL,
	[Observacion] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_Devoluciones] PRIMARY KEY CLUSTERED 
(
	[Id_devolucion] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Editoriales]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Editoriales](
	[Id_editorial] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](250) NOT NULL,
 CONSTRAINT [PK_Editoriales] PRIMARY KEY CLUSTERED 
(
	[Id_editorial] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Material_Autores]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Material_Autores](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Id_material] [int] NOT NULL,
	[Id_autor] [int] NOT NULL,
 CONSTRAINT [PK_Material_Autores] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Material_Categorias]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Material_Categorias](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Id_material] [int] NOT NULL,
	[Id_categoria] [int] NOT NULL,
 CONSTRAINT [PK_Material_Categorias] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Materiales]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Materiales](
	[Id_material] [int] IDENTITY(1,1) NOT NULL,
	[Titulo] [nvarchar](max) NOT NULL,
	[Id_tipo_material] [int] NOT NULL,
	[Id_editorial] [int] NULL,
	[Descripcion] [nvarchar](250) NOT NULL,
	[Año] [nvarchar](max) NOT NULL,
	[Formato] [nvarchar](20) NOT NULL,
	[Idioma] [nvarchar](25) NOT NULL,
	[ISBN] [nvarchar](14) NULL,
	[Id_sede] [int] NOT NULL,
	[Observacion] [nvarchar](250) NULL,
	[Archivo] [nvarchar](max) NULL,
 CONSTRAINT [PK_Materiales] PRIMARY KEY CLUSTERED 
(
	[Id_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Prestamos]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Prestamos](
	[Id_prestamo] [int] IDENTITY(1,1) NOT NULL,
	[Id_usuario] [int] NOT NULL,
	[Id_material] [int] NOT NULL,
	[Fecha_prestamo] [datetime2](7) NOT NULL,
	[Fecha_limite] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Prestamos] PRIMARY KEY CLUSTERED 
(
	[Id_prestamo] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Programas_academicos]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Programas_academicos](
	[Id_programa_academico] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Programas_academicos] PRIMARY KEY CLUSTERED 
(
	[Id_programa_academico] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservas]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservas](
	[Id_reserva] [int] IDENTITY(1,1) NOT NULL,
	[Id_usuario] [int] NOT NULL,
	[Id_material] [int] NOT NULL,
	[Fecha_reserva] [datetime2](7) NOT NULL,
	[Esta_reservado] [bit] NOT NULL,
 CONSTRAINT [PK_Reservas] PRIMARY KEY CLUSTERED 
(
	[Id_reserva] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id_rol] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id_rol] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sedes]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sedes](
	[Id_sede] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Sedes] PRIMARY KEY CLUSTERED 
(
	[Id_sede] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tipo_materiales]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipo_materiales](
	[Id_tipo_material] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](150) NOT NULL,
 CONSTRAINT [PK_Tipo_materiales] PRIMARY KEY CLUSTERED 
(
	[Id_tipo_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[Semestre] [int] NULL,
	[Id_programa_academico] [int] NULL,
	[Apellido] [nvarchar](250) NOT NULL,
	[Cedula] [int] NOT NULL,
	[Correo_electronico] [nvarchar](max) NOT NULL,
	[Id_usuario_autenticacion] [int] NULL,
	[Nombre] [nvarchar](250) NOT NULL,
	[Telefono] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Usuarios] PRIMARY KEY CLUSTERED 
(
	[Id_usuario] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios_autenticacion]    Script Date: 22/11/2022 4:44:50 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios_autenticacion](
	[Id_usuario_autenticacion] [int] IDENTITY(1,1) NOT NULL,
	[Username] [int] NOT NULL,
	[PasswordHash] [varbinary](max) NULL,
	[PasswordSalt] [varbinary](max) NULL,
	[Id_rol] [int] NOT NULL,
 CONSTRAINT [PK_Usuarios_autenticacion] PRIMARY KEY CLUSTERED 
(
	[Id_usuario_autenticacion] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [IX_Devoluciones_Id_prestamo]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Devoluciones_Id_prestamo] ON [dbo].[Devoluciones]
(
	[Id_prestamo] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Material_Autores_Id_autor]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Material_Autores_Id_autor] ON [dbo].[Material_Autores]
(
	[Id_autor] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Material_Autores_Id_material]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Material_Autores_Id_material] ON [dbo].[Material_Autores]
(
	[Id_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Material_Categorias_Id_categoria]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Material_Categorias_Id_categoria] ON [dbo].[Material_Categorias]
(
	[Id_categoria] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Material_Categorias_Id_material]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Material_Categorias_Id_material] ON [dbo].[Material_Categorias]
(
	[Id_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Materiales_Id_editorial]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Materiales_Id_editorial] ON [dbo].[Materiales]
(
	[Id_editorial] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Materiales_Id_sede]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Materiales_Id_sede] ON [dbo].[Materiales]
(
	[Id_sede] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Materiales_Id_tipo_material]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Materiales_Id_tipo_material] ON [dbo].[Materiales]
(
	[Id_tipo_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Prestamos_Id_material]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Prestamos_Id_material] ON [dbo].[Prestamos]
(
	[Id_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Prestamos_Id_usuario]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Prestamos_Id_usuario] ON [dbo].[Prestamos]
(
	[Id_usuario] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservas_Id_material]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Reservas_Id_material] ON [dbo].[Reservas]
(
	[Id_material] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservas_Id_usuario]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Reservas_Id_usuario] ON [dbo].[Reservas]
(
	[Id_usuario] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Usuarios_Id_programa_academico]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Usuarios_Id_programa_academico] ON [dbo].[Usuarios]
(
	[Id_programa_academico] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Usuarios_Id_usuario_autenticacion]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Usuarios_Id_usuario_autenticacion] ON [dbo].[Usuarios]
(
	[Id_usuario_autenticacion] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Usuarios_autenticacion_Id_rol]    Script Date: 22/11/2022 4:44:50 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_Usuarios_autenticacion_Id_rol] ON [dbo].[Usuarios_autenticacion]
(
	[Id_rol] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, DROP_EXISTING = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Reservas] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Esta_reservado]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (N'') FOR [Apellido]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT ((0)) FOR [Cedula]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (N'') FOR [Correo_electronico]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (N'') FOR [Nombre]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (N'') FOR [Telefono]
GO
ALTER TABLE [dbo].[Devoluciones]  WITH CHECK ADD  CONSTRAINT [FK_Devoluciones_Prestamos_Id_prestamo] FOREIGN KEY([Id_prestamo])
REFERENCES [dbo].[Prestamos] ([Id_prestamo])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Devoluciones] CHECK CONSTRAINT [FK_Devoluciones_Prestamos_Id_prestamo]
GO
ALTER TABLE [dbo].[Material_Autores]  WITH CHECK ADD  CONSTRAINT [FK_Material_Autores_Autores_Id_autor] FOREIGN KEY([Id_autor])
REFERENCES [dbo].[Autores] ([Id_autor])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Material_Autores] CHECK CONSTRAINT [FK_Material_Autores_Autores_Id_autor]
GO
ALTER TABLE [dbo].[Material_Autores]  WITH CHECK ADD  CONSTRAINT [FK_Material_Autores_Materiales_Id_material] FOREIGN KEY([Id_material])
REFERENCES [dbo].[Materiales] ([Id_material])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Material_Autores] CHECK CONSTRAINT [FK_Material_Autores_Materiales_Id_material]
GO
ALTER TABLE [dbo].[Material_Categorias]  WITH CHECK ADD  CONSTRAINT [FK_Material_Categorias_Categorias_Id_categoria] FOREIGN KEY([Id_categoria])
REFERENCES [dbo].[Categorias] ([Id_categoria])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Material_Categorias] CHECK CONSTRAINT [FK_Material_Categorias_Categorias_Id_categoria]
GO
ALTER TABLE [dbo].[Material_Categorias]  WITH CHECK ADD  CONSTRAINT [FK_Material_Categorias_Materiales_Id_material] FOREIGN KEY([Id_material])
REFERENCES [dbo].[Materiales] ([Id_material])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Material_Categorias] CHECK CONSTRAINT [FK_Material_Categorias_Materiales_Id_material]
GO
ALTER TABLE [dbo].[Materiales]  WITH CHECK ADD  CONSTRAINT [FK_Materiales_Editoriales_Id_editorial] FOREIGN KEY([Id_editorial])
REFERENCES [dbo].[Editoriales] ([Id_editorial])
GO
ALTER TABLE [dbo].[Materiales] CHECK CONSTRAINT [FK_Materiales_Editoriales_Id_editorial]
GO
ALTER TABLE [dbo].[Materiales]  WITH CHECK ADD  CONSTRAINT [FK_Materiales_Sedes_Id_sede] FOREIGN KEY([Id_sede])
REFERENCES [dbo].[Sedes] ([Id_sede])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Materiales] CHECK CONSTRAINT [FK_Materiales_Sedes_Id_sede]
GO
ALTER TABLE [dbo].[Materiales]  WITH CHECK ADD  CONSTRAINT [FK_Materiales_Tipo_materiales_Id_tipo_material] FOREIGN KEY([Id_tipo_material])
REFERENCES [dbo].[Tipo_materiales] ([Id_tipo_material])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Materiales] CHECK CONSTRAINT [FK_Materiales_Tipo_materiales_Id_tipo_material]
GO
ALTER TABLE [dbo].[Prestamos]  WITH CHECK ADD  CONSTRAINT [FK_Prestamos_Materiales_Id_material] FOREIGN KEY([Id_material])
REFERENCES [dbo].[Materiales] ([Id_material])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Prestamos] CHECK CONSTRAINT [FK_Prestamos_Materiales_Id_material]
GO
ALTER TABLE [dbo].[Prestamos]  WITH CHECK ADD  CONSTRAINT [FK_Prestamos_Usuarios_Id_usuario] FOREIGN KEY([Id_usuario])
REFERENCES [dbo].[Usuarios] ([Id_usuario])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Prestamos] CHECK CONSTRAINT [FK_Prestamos_Usuarios_Id_usuario]
GO
ALTER TABLE [dbo].[Reservas]  WITH CHECK ADD  CONSTRAINT [FK_Reservas_Materiales_Id_material] FOREIGN KEY([Id_material])
REFERENCES [dbo].[Materiales] ([Id_material])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Reservas] CHECK CONSTRAINT [FK_Reservas_Materiales_Id_material]
GO
ALTER TABLE [dbo].[Reservas]  WITH CHECK ADD  CONSTRAINT [FK_Reservas_Usuarios_Id_usuario] FOREIGN KEY([Id_usuario])
REFERENCES [dbo].[Usuarios] ([Id_usuario])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Reservas] CHECK CONSTRAINT [FK_Reservas_Usuarios_Id_usuario]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Programas_academicos_Id_programa_academico] FOREIGN KEY([Id_programa_academico])
REFERENCES [dbo].[Programas_academicos] ([Id_programa_academico])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Programas_academicos_Id_programa_academico]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Usuarios_autenticacion_Id_usuario_autenticacion] FOREIGN KEY([Id_usuario_autenticacion])
REFERENCES [dbo].[Usuarios_autenticacion] ([Id_usuario_autenticacion])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Usuarios_autenticacion_Id_usuario_autenticacion]
GO
ALTER TABLE [dbo].[Usuarios_autenticacion]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_autenticacion_Roles_Id_rol] FOREIGN KEY([Id_rol])
REFERENCES [dbo].[Roles] ([Id_rol])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Usuarios_autenticacion] CHECK CONSTRAINT [FK_Usuarios_autenticacion_Roles_Id_rol]
GO
ALTER DATABASE [Biblioteca-modular] SET  READ_WRITE 
GO
