import BlurredShape from "../../../public/images/blurred-shape.svg";
import BlurredShapeGray from "../../../public/images/blurred-shape-gray.svg";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      {children}
      <div className="absolute -bottom-130 -left-40">
        <BlurredShapeGray />
      </div>
      <div className="absolute -bottom-150 right-28">
        <BlurredShape />
      </div>
    </main>
  );
}
