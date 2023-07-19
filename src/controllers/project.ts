import { Request, Response } from 'express';
import { Project } from '../models/project';
import { UserInfo } from '../types';

const projectController = {
  async postProject(req: UserInfo, res: Response) {
    const {
      title,
      description,
      technologies,
      difficulty,
      project_type,
      project_status,
      project_participants,
      repo_url,
    } = req.body;

    try {
      const newProject = new Project({
        title,
        description,
        technologies,
        difficulty,
        project_type,
        project_status,
        project_autor: req.user.username,
        project_autor_id: req.user._id,
        project_participants,
        repo_url,
      });
      await newProject.save();

      return res
        .status(200)
        .json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
      console.log(error);
    }
  },
  async editProject(req: UserInfo, res: Response) {
    const { id } = req.params;
    const updateProject = req.body;

    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
      }

      if (project.project_autor_id?.toString() !== req.user._id) {
        return res
          .status(403)
          .json({ error: 'Solo el autor del proyecto puede editarlo' });
      }

      await Project.findByIdAndUpdate(id, updateProject, { new: true });
      res.status(200).json({ post: project, message: 'Proyecto actualizado' });
    } catch {
      console.log('Error');
    }
  },
  async deleteProject(req: UserInfo, res: Response) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);

      if (!project) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
      }

      if (project.project_autor_id?.toString() !== req.user._id) {
        return res
          .status(403)
          .json({ error: 'Solo el autor del proyecto puede borrarlo' });
      }

      await Project.deleteOne({ _id: id });
      res.status(200).json({ post: project, message: 'Proyecto actualizado' });
    } catch {
      console.log('Error');
    }
  },
  async getProject(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      console.log(req.params);
      return res.json(project);
    } catch {
      console.log('Error');
    }
  },
  async getProjects(req: Request, res: Response) {
    try {
      const projects = await Project.find();
      return res.json(projects);
    } catch {
      console.log('Error');
    }
  },
};

export { projectController };
