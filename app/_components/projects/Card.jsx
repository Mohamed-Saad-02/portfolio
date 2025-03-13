import Image from "next/image";
import Button from "../Button";
import clsx from "clsx";

function Card({ isBack, project }) {
  return (
    <div className="bg-[#31313f] rounded-lg p-4 space-y-3 flex flex-col">
      <div
        className={clsx(
          "rounded h-48 relative overflow-hidden",
          !isBack && "bg-primary"
        )}
      >
        {isBack ? (
          <div className="py-1 px-3 bg-primary rounded w-fit ms-auto">
            BackEnd
          </div>
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <h3 className="text-primary font-semibold text-2xl">{project.name}</h3>
      <p>{project.description}</p>

      <div className="flex items-end gap-3 mt-auto flex-grow">
        <Button as="a" href={project.homepage} target="_blank" fullWidth>
          View Live
        </Button>

        <Button
          as="a"
          href={project.html_url}
          target="_blank"
          fullWidth
          variant="outline"
        >
          Github Repo
        </Button>
      </div>
    </div>
  );
}

export default Card;
