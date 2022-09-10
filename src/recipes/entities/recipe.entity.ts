import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('recipes')
export class RecipeEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;
}
