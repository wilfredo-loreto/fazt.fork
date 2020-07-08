import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();

import taskRoutes from "./routes/tasks.routes";
import projectsRoutes from "./routes/projects.routes";
import userRoutes from "./routes/users.routes";

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/tasks", taskRoutes);
app.use("/projects", projectsRoutes);
app.use("/users", userRoutes);

// app.use('/discord', require('./routes/discord.routes'));
// app.use('/job', require('./routes/jobs.routes'));
// app.use('/user', require('./routes/users.routes'));

// static files
app.use(express.static(path.join(__dirname, "public")));

// global variables

export default app;
