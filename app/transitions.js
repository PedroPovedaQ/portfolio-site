export default function() {
  // Add your transitions here, like:
  this.transition(
    this.fromRoute("index"),
    this.toRoute("education"),
    this.use("toUp"),
    this.reverse("toUp")
  );
  this.transition(
    this.fromRoute("index"),
    this.toRoute("skills"),
    this.use("toUp"),
    this.reverse("toDown")
  );
  this.transition(
    this.fromRoute("index"),
    this.toRoute("portfolio"),
    this.use("toUp"),
    this.reverse("toDown")
  );

  this.transition(
    this.fromRoute("skills"),
    this.toRoute("portfolio"),
    this.use("toUp"),
    this.reverse("toDown")
  );

  this.transition(
    this.fromRoute("skills"),
    this.toRoute("education"),
    this.use("toUp"),
    this.reverse("toDown")
  );

  this.transition(
    this.fromRoute("portfolio"),
    this.toRoute("education"),
    this.use("toUp"),
    this.reverse("toDown")
  );
}
