<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use App\Entity\Ticket;
use App\Form\ValidateTicketType;
/**
 * Ticket controller.
 * @Route("/api", name="api_")
 */
class TicketController extends FOSRestController
{
  /**
   * Lists all Tickets.
   * @Rest\Get("/tickets")
   *
   * @return Response
   */
  public function getTicketAction()
  {
    $repository = $this->getDoctrine()->getRepository(Ticket::class);
    $tickets = $repository->findall();
    return $this->handleView($this->view($tickets));
  }
  /**
   * Create Ticket.
   * @Rest\Post("/ticket")
   *
   * @return Response
   */
  public function postTicketAction(Request $request)
  {
    $ticket = new Ticket();
    $form = $this->createForm(ValidateTicketType::class, $ticket);
    $data = json_decode($request->getContent(), true);
    $form->submit($data);
    if ($form->isSubmitted() && $form->isValid()) {
      $em = $this->getDoctrine()->getManager();
      $em->persist($ticket);
      $em->flush();
      return $this->handleView($this->view(['status' => 'ok'], Response::HTTP_CREATED));
    }
    return $this->handleView($this->view($ticket->getErrors()));
  }
}