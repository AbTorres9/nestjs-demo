export class CreatePostDto {
  readonly id: number;
  readonly UserId: string;
  readonly postId: number;
  readonly title: string;
  readonly summary: string;
  readonly categoryId: string;
  readonly categoryName: string;
}
