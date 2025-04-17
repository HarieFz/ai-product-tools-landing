import BlurredShape from "../../../public/images/blurred-shape.svg";
import BlurredShapeGray from "../../../public/images/blurred-shape-gray.svg";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-y-clip">
      {children}
      <div className="absolute bottom-0 -left-40 -z-10">
        <BlurredShapeGray />
      </div>
      <div className="absolute -bottom-28 right-28 -z-10">
        <BlurredShape />
      </div>
    </main>
  );
}
